import type { Context } from "hono";

import { renderService } from "../config/dependencies.js";

export async function renderDesign(c: Context) {
  const designId = c.req.param("designId");
  const username = c.req.query("username");

  if (!designId) {
    return c.json(
      {
        error: {
          code: "DESIGN_ID_REQUIRED",
          message: "designId path parameter is required"
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

  try {
    const svg = await renderService.render(
      designId,
      username
    );

    return c.body(svg, 200, {
      "Content-Type": "image/svg+xml; charset=UTF-8",
      "Cache-Control": "public, max-age=300, s-maxage=300",
      "X-Content-Type-Options": "nosniff"
    });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.startsWith("Design not found:")
    ) {
      return c.json(
        {
          error: {
            code: "DESIGN_NOT_FOUND",
            message: error.message
          }
        },
        404
      );
    }

    throw error;
  }
}