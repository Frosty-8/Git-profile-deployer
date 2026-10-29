import {
  text,
  rect
} from "../../sdk/svg/index.js";

import type { SectionDefinition } from "../../composition/section.js";

export const retroStackSection:
  SectionDefinition = {
    id: "stack",

    render(context) {
      const {
        profile,
        theme
      } = context;

      const languages =
        profile.languages.slice(0, 6);

      const output: string[] = [
        text(
          "TECH // STACK",
          {
            x: 0,
            y: 22,
            fill: theme.colors.accent,
            fontSize: 16,
            fontFamily:
              theme.typography.mono,
            fontWeight: 700
          }
        )
      ];

      languages.forEach(
        (language, index) => {
          const column =
            index % 2;

          const row =
            Math.floor(index / 2);

          const x = column * 220;
          const y = 40 + row * 34;

          output.push(
            rect({
              x,
              y,
              width: 200,
              height: 26,
              fill: "#0D0618",
              stroke: theme.colors.muted,
              strokeWidth: 1,
              rx: 3
            })
          );

          output.push(
            text(
              language.name,
              {
                x: x + 10,
                y: y + 18,
                fill: theme.colors.foreground,
                fontSize: 12,
                fontFamily:
                  theme.typography.mono
              }
            )
          );

          output.push(
            text(
              `${language.percentage.toFixed(1)}%`,
              {
                x: x + 185,
                y: y + 18,
                fill: theme.colors.primary,
                fontSize: 10,
                fontFamily:
                  theme.typography.mono,
                textAnchor: "end"
              }
            )
          );
        }
      );

      return output.join("\n");
    }
  };