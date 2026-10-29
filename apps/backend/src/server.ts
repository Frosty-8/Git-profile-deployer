import { serve } from "@hono/node-server";

import app from "./app.js";
import { env } from "./config/env.js";
import { APP_NAME } from "./config/constants.js";

serve(
  {
    fetch: app.fetch,
    hostname: env.HOST,
    port: env.PORT
  },
  (info) => {
    console.log(
      `${APP_NAME} running on http://${info.address}:${info.port}`
    );
  }
);