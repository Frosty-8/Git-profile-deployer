import { Hono } from "hono";
import {
  getDesign,
  listDesigns
} from "../controllers/design.controller.js";

const designRoute = new Hono();

designRoute.get("/", listDesigns);

designRoute.get("/:id", getDesign);

export default designRoute;