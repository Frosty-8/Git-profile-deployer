import { Hono } from "hono";

import { getProfile } from "../controllers/profile.controller.js";

const profile = new Hono();

profile.get("/:username", getProfile);

export default profile;