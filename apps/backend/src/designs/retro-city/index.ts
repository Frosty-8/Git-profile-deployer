import type {
  DesignDefinition
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
  retroBackground,
  skyline,
  retroGrid
} from "./background.js";

import {
  retroCityTheme
} from "./theme.js";

import {
  retroCityManifest
} from "./manifest.js";

const composition: DesignComposition = {
  width: 1200,
  height: 900,

  sections: [
    {
      section: "hero",
      x: 80,
      y: 90,
      width: 1040,
      height: 170
    },

    {
      section: "stats",
      x: 80,
      y: 310,
      width: 1040,
      height: 110
    },

    {
      section: "stack",
      x: 80,
      y: 470,
      width: 460,
      height: 170
    },

    {
      section: "projects",
      x: 580,
      y: 470,
      width: 540,
      height: 230
    }
  ]
};

export const retroCityDesign:
  DesignDefinition = {

  manifest: retroCityManifest,

  theme: retroCityTheme,

  render(context) {
    const background = retroBackground(
      composition.width,
      composition.height,
      retroCityTheme
    );

    const city = skyline(
      composition.width,
      composition.height * 0.3,
      retroCityTheme
    );

    const grid = retroGrid(
      composition.width,
      composition.height,
      retroCityTheme
    );

    const sections =
      renderComposition(
        composition,
        retroSectionRegistry,
        {
          ...context,
          width: composition.width,
          height: composition.height
        }
      );

    return svg(
      composition.width,
      composition.height,
      `
        ${background}

        <g transform="translate(0 630)">
          ${city}
        </g>

        ${grid}

        ${sections}
      `
    );
  }
};