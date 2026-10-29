import type { ErrorHandler } from "hono";
import { env } from "../config/env.js";

export const errorHandler: ErrorHandler = (error, c) => {
  console.error(error);

  return c.json(
    {
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message:
          env.NODE_ENV === "production"
            ? "Internal server error"
            : error.message
      }
    },
    500
  );
};