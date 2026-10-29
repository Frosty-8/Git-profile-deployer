import { Hono } from "hono";

import { API_PREFIX } from "./config/constants.js";
import { corsMiddleware } from "./middleware/cors.js";
import { errorHandler } from "./middleware/error-handler.js";
import { loggerMiddleware } from "./middleware/logger.js";

import profile from "./routes/profile.js";
import health from "./routes/health.js";

const app = new Hono();

app.use("*", loggerMiddleware);

app.use("*", corsMiddleware);

app.onError(errorHandler);

app.route(`${API_PREFIX}/health`, health);

app.route(`${API_PREFIX}/profile`, profile);

app.notFound((c) => {
  return c.json(
    {
      error: {
        code: "NOT_FOUND",
        message: "Route not found"
      }
    },
    404
  );
});

export default app;