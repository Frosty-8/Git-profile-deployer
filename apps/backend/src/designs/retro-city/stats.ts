import {
  rect,
  text
} from "../../sdk/svg/index.js";

import type { SectionDefinition } from "../../composition/section.js";

export const retroStatsSection:
  SectionDefinition = {
    id: "stats",

    render(context) {
      const {
        profile,
        theme,
        width
      } = context;

      const gap = 14;
      const cardWidth =
        (width - gap * 2) / 3;

      const stats: [string, number][] = [
        ["REPOS", profile.publicRepos],
        ["FOLLOWERS", profile.followers],
        ["FOLLOWING", profile.following]
      ];

      return stats
        .map(([label, value], index) => {
          const x = index * (cardWidth + gap);
      
          return `
            ${rect({
              x,
              y: 0,
              width: cardWidth,
              height: 100,
              fill: "#0D0618",
              stroke: theme.colors.primary,
              strokeWidth: 1,
              rx: 4
            })}
      
            ${text(String(value), {
              x: x + 20,
              y: 45,
              fill: theme.colors.accent,
              fontSize: 30,
              fontFamily: theme.typography.mono,
              fontWeight: 700
            })}
      
            ${text(label, {
              x: x + 20,
              y: 75,
              fill: theme.colors.secondary,
              fontSize: 12,
              fontFamily: theme.typography.mono
            })}
          `;
        })
        .join("");
    }
  };