import {
  text
} from "../../sdk/svg/index.js";

import type { SectionDefinition } from "../section.js";

export const heatmapSection: SectionDefinition = {
  id: "heatmap",

  render(context) {
    return text(
      "Contribution history",
      {
        x: 0,
        y: 24,
        fill: context.theme.colors.secondary,
        fontSize: 14,
        fontFamily: context.theme.typography.mono
      }
    );
  }
};