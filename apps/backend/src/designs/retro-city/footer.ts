import {
  text
} from "../../sdk/svg/index.js";

import type { SectionDefinition } from "../../composition/section.js";

export const retroFooterSection:
  SectionDefinition = {
    id: "footer",

    render(context) {
      return text(
        "FROSTY DESIGN STUDIO // RETRO CITY",
        {
          x: 0,
          y: 18,
          fill: context.theme.colors.muted,
          fontSize: 10,
          fontFamily:
            context.theme.typography.mono
        }
      );
    }
  };