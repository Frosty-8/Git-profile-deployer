import { Hono } from "hono";
import { APP_NAME } from "../config/constants.js";

const health = new Hono();

health.get("/", (c) => {
  return c.json({
    status: "ok",
    service: APP_NAME,
    timestamp: new Date().toISOString()
  });
});

health.get("/live", (c) => {
  return c.json({
    status: "ok",
    service: APP_NAME
  });
});

health.get("/ready", (c) => {
  return c.json({
    status: "ready",
    service: APP_NAME
  });
});

export default health;