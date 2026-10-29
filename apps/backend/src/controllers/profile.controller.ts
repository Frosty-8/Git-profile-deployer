import type { Context } from "hono";

import { profileParamsSchema } from "../schemas/profile.schema.js";
import { profileService } from "../config/dependencies.js";

export async function getProfile(c: Context) {
  const result = profileParamsSchema.safeParse({
    username: c.req.param("username")
  });

  if (!result.success) {
    return c.json(
      {
        error: {
          code: "INVALID_USERNAME",
          message:
            result.error.issues[0]?.message ??
            "Invalid username"
        }
      },
      400
    );
  }

  const profile = await profileService.getProfile(
    result.data.username
  );

  return c.json({
    data: profile
  });
}