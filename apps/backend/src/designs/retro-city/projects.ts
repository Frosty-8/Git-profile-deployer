import {
  rect,
  text
} from "../../sdk/svg/index.js";

import type { SectionDefinition } from "../../composition/section.js";

function truncate(
  value: string,
  max: number
): string {
  return value.length <= max
    ? value
    : `${value.slice(0, max - 3)}...`;
}

export const retroProjectsSection:
  SectionDefinition = {
    id: "projects",

    render(context) {
      const {
        profile,
        theme,
        width
      } = context;

      const projects =
        profile.repositories.slice(0, 2);

      const gap = 14;

      const cardWidth =
        (width - gap) / 2;

      return projects
        .map((project, index) => {
          const x =
            index *
            (cardWidth + gap);

          return `
            ${rect({
              x,
              y: 0,
              width: cardWidth,
              height: 150,
              fill: "#0D0618",
              stroke: theme.colors.primary,
              strokeWidth: 1,
              rx: 4
            })}

            ${text(
              project.name,
              {
                x: x + 18,
                y: 30,
                fill: theme.colors.accent,
                fontSize: 16,
                fontFamily:
                  theme.typography.mono,
                fontWeight: 700
              }
            )}

            ${text(
              project.description
                ? truncate(
                    project.description,
                    42
                  )
                : "NO DESCRIPTION",
              {
                x: x + 18,
                y: 60,
                fill: theme.colors.secondary,
                fontSize: 12,
                fontFamily:
                  theme.typography.body
              }
            )}

            ${text(
              `★ ${project.stars}`,
              {
                x: x + 18,
                y: 105,
                fill: theme.colors.primary,
                fontSize: 12,
                fontFamily:
                  theme.typography.mono
              }
            )}

            ${text(
              `⑂ ${project.forks}`,
              {
                x: x + 90,
                y: 105,
                fill: theme.colors.primary,
                fontSize: 12,
                fontFamily:
                  theme.typography.mono
              }
            )}

            ${text(
              project.language ??
                "UNKNOWN",
              {
                x: x + 18,
                y: 130,
                fill: theme.colors.muted,
                fontSize: 11,
                fontFamily:
                  theme.typography.mono
              }
            )}
          `;
        })
        .join("");
    }
  };