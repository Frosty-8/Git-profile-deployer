import {
  badge,
  text
} from "../../sdk/svg/index.js";

import type { SectionDefinition } from "../section.js";

export const stackSection: SectionDefinition = {
  id: "stack",

  render(context) {
    const {
      profile,
      theme
    } = context;

    const languages =
      profile.languages.slice(0, 6);

    const output = [
      text(
        "Tech Stack",
        {
          x: 0,
          y: 24,
          fill: theme.colors.foreground,
          fontSize: 22,
          fontFamily: theme.typography.heading,
          fontWeight: 700
        }
      )
    ];

    languages.forEach((language, index) => {
      const column = index % 3;
      const row = Math.floor(index / 3);

      output.push(
        badge(language.name, {
          x: column * 130,
          y: 45 + row * 42,
          theme
        })
      );
    });

    return output.join("\n");
  }
};