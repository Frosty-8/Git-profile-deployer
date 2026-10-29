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
  retroSectionRegistry
} from "./sections.js";

import {
  retroCityBackground
} from "./background.js";

import { retroCityManifest } from "./manifest.js";
import { retroCityTheme } from "./theme.js";

const composition:
  DesignComposition = {
    width: 1200,
    height: 630,

    sections: [
      {
        section: "hero",
        x: 70,
        y: 45,
        width: 1060,
        height: 130
      },

      {
        section: "stats",
        x: 70,
        y: 190,
        width: 1060,
        height: 100
      },

      {
        section: "stack",
        x: 70,
        y: 315,
        width: 440,
        height: 130
      },

      {
        section: "projects",
        x: 530,
        y: 315,
        width: 600,
        height: 150
      },

      {
        section: "footer",
        x: 70,
        y: 490,
        width: 400,
        height: 30
      }
    ]
  };

export const retroCityDesign:
  DesignDefinition = {
    manifest: retroCityManifest,

    theme: retroCityTheme,

    render(
      context: DesignRenderContext
    ): string {
      const background =
        retroCityBackground(
          retroCityTheme
        );

      const content =
        renderComposition(
          composition,
          retroSectionRegistry,
          {
            ...context,
            theme: retroCityTheme,
            width: composition.width,
            height: composition.height
          }
        );

      return svg(
        composition.width,
        composition.height,
        `
          ${background}

          ${content}
        `
      );
    }
  };