import {
  panel,
  text
} from "../../sdk/svg/index.js";

import type { SectionDefinition } from "../section.js";

export const statsSection: SectionDefinition = {
  id: "stats",

  render(context) {
    const {
      profile,
      theme,
      width,
      height
    } = context;

    const gap = 12;

    const cardWidth =
      (width - gap * 2) / 3;

    const items = [
      {
        label: "Repositories",
        value: profile.publicRepos
      },
      {
        label: "Followers",
        value: profile.followers
      },
      {
        label: "Following",
        value: profile.following
      }
    ];

    return items
      .map((item, index) => {
        const x =
          index * (cardWidth + gap);

        return `
          ${panel({
            x,
            y: 0,
            width: cardWidth,
            height,
            theme
          })}

          ${text(
            String(item.value),
            {
              x: x + 20,
              y: 45,
              fill: theme.colors.foreground,
              fontSize: 28,
              fontFamily: theme.typography.mono,
              fontWeight: 700
            }
          )}

          ${text(
            item.label,
            {
              x: x + 20,
              y: 75,
              fill: theme.colors.secondary,
              fontSize: 14,
              fontFamily: theme.typography.body
            }
          )}
        `;
      })
      .join("");
  }
};