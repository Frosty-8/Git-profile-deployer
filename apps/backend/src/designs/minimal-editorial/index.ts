import type {
  DesignDefinition,
  DesignRenderContext
} from "../../types/design.js";

import {
  svg
} from "../../sdk/svg/index.js";

import {
  renderComposition,
  type DesignComposition
} from "../../composition/composition.js";

import {
  sectionRegistry
} from "../../composition/index.js";

import { minimalEditorialManifest } from "./manifest.js";
import { minimalEditorialTheme } from "./theme.js";

const composition: DesignComposition = {
  width: 1200,
  height: 630,

  sections: [
    {
      section: "hero",
      x: 80,
      y: 60,
      width: 1040,
      height: 140
    },

    {
      section: "stats",
      x: 80,
      y: 230,
      width: 1040,
      height: 110
    },

    {
      section: "stack",
      x: 80,
      y: 370,
      width: 500,
      height: 120
    },

    {
      section: "projects",
      x: 600,
      y: 370,
      width: 520,
      height: 180
    }
  ]
};

export const minimalEditorialDesign:
  DesignDefinition = {
    manifest: minimalEditorialManifest,

    theme: minimalEditorialTheme,

    render(
      context: DesignRenderContext
    ): string {
      const content =
        renderComposition(
          composition,
          sectionRegistry,
          {
            ...context,
            width: composition.width,
            height: composition.height
          }
        );

      return svg(
        composition.width,
        composition.height,
        content
      );
    }
  };