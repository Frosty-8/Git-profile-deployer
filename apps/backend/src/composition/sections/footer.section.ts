import {
  text
} from "../../sdk/svg/index.js";

import type { SectionDefinition } from "../section.js";

export const footerSection: SectionDefinition = {
  id: "footer",

  render(context) {
    return text(
      context.profile.profileUrl,
      {
        x: 0,
        y: 20,
        fill: context.theme.colors.muted,
        fontSize: 12,
        fontFamily: context.theme.typography.mono
      }
    );
  }
};