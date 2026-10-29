import type { Context } from "hono";
import { designRegistry } from "../config/dependencies.js";

export function listDesigns(c: Context) {
  return c.json({
    designs: designRegistry.list(),
    count: designRegistry.count()
  });
}

export function getDesign(c: Context) {
  const id = c.req.param("id");

  if (!id) {
    return c.json(
      {
        error: {
          code: "DESIGN_ID_REQUIRED",
          message: "Design ID is required"
        }
      },
      400
    );
  }

  const design = designRegistry.get(id);

  if (!design) {
    return c.json(
      {
        error: {
          code: "DESIGN_NOT_FOUND",
          message: `Design not found: ${id}`
        }
      },
      404
    );
  }

  return c.json({
    manifest: design.manifest,
    theme: design.theme
  });
}