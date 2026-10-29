import {
  panel,
  text
} from "../../sdk/svg/index.js";

import type { SectionDefinition } from "../section.js";

export const projectsSection: SectionDefinition = {
  id: "projects",

  render(context) {
    const {
      profile,
      theme,
      width
    } = context;

    const projects =
      profile.repositories.slice(0, 3);

    const gap = 16;

    const cardWidth =
      (width - gap * 2) / 3;

    return projects
      .map((project, index) => {
        const x =
          index * (cardWidth + gap);

        return `
          ${panel({
            x,
            y: 0,
            width: cardWidth,
            height: 150,
            theme
          })}

          ${text(
            project.name,
            {
              x: x + 18,
              y: 35,
              fill: theme.colors.foreground,
              fontSize: 18,
              fontFamily: theme.typography.heading,
              fontWeight: 700
            }
          )}

          ${text(
            project.description
              ? truncate(
                  project.description,
                  35
                )
              : "No description",
            {
              x: x + 18,
              y: 65,
              fill: theme.colors.secondary,
              fontSize: 13,
              fontFamily: theme.typography.body
            }
          )}

          ${text(
            `★ ${project.stars}`,
            {
              x: x + 18,
              y: 110,
              fill: theme.colors.accent,
              fontSize: 14,
              fontFamily: theme.typography.mono
            }
          )}

          ${project.language
            ? text(
                project.language,
                {
                  x: x + 18,
                  y: 132,
                  fill: theme.colors.secondary,
                  fontSize: 12,
                  fontFamily: theme.typography.mono
                }
              )
            : ""}
        `;
      })
      .join("");
  }
};

function truncate(
  value: string,
  maxLength: number
): string {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength - 3)}...`;
}