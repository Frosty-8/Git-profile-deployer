import { Hono } from "hono";

import {
  renderDesign
} from "../controllers/render.controller.js";

const renderRoute = new Hono();

renderRoute.get(
  "/:designId",
  renderDesign
);

export default renderRoute;