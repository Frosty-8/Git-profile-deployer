import type { DesignManifest } from "../../types/design.js";

export const minimalEditorialManifest: DesignManifest = {
  id: "minimal-editorial",
  name: "Minimal Editorial",
  version: "1.0.0",
  author: "Frosty",
  description:
    "A clean editorial GitHub profile design focused on typography and structured information.",
  category: "minimal",
  tags: [
    "minimal",
    "clean",
    "editorial",
    "professional"
  ],
  sections: [
    "wordmark",
    "hero",
    "stats",
    "stack",
    "projects"
  ],
  preview: {
    thumbnail: "/designs/minimal-editorial/preview.svg",
    width: 1200,
    height: 630
  }
};