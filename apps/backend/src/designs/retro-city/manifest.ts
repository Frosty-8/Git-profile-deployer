import type { DesignManifest } from "../../types/design.js";

export const retroCityManifest: DesignManifest = {
  id: "retro-city",
  name: "Retro City",
  version: "1.0.0",
  author: "Frosty",
  description:
    "A neon retro-futuristic GitHub profile inspired by city lights, synthwave aesthetics and digital skylines.",
  category: "retro",
  tags: [
    "retro",
    "synthwave",
    "neon",
    "city",
    "dark"
  ],
  sections: [
    "hero",
    "stats",
    "stack",
    "projects",
    "footer"
  ],
  preview: {
    thumbnail: "/designs/retro-city/preview.svg",
    width: 1200,
    height: 630
  }
};