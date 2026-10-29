import type { Context } from "hono";

import {
  designRegistry,
  profileService
} from "../config/dependencies.js";

export async function renderDesign(c: Context) {
  const designId = c.req.param("designId");
  const username = c.req.query("username");

  if (!designId) {
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

  if (!username) {
    return c.json(
      {
        error: {
          code: "USERNAME_REQUIRED",
          message: "username query parameter is required"
        }
      },
      400
    );
  }

  const design = designRegistry.get(designId);

  if (!design) {
    return c.json(
      {
        error: {
          code: "DESIGN_NOT_FOUND",
          message: `Design not found: ${designId}`
        }
      },
      404
    );
  }

  const profile = await profileService.getProfile(username);

  const svg = design.render({
    profile,
    theme: design.theme
  });

  return c.body(svg, 200, {
    "Content-Type": "image/svg+xml; charset=utf-8",
    "Cache-Control": "public, max-age=300"
  });
}