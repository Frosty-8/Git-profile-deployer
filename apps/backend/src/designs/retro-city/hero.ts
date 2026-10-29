import {
  avatar,
  text,
  line,
  group
} from "../../sdk/svg/index.js";

import type { SectionDefinition } from "../../composition/section.js";

export const retroHeroSection:
  SectionDefinition = {
    id: "hero",

    render(context) {
      const {
        profile,
        theme
      } = context;

      return group(
        [
          avatar({
            url: profile.avatarUrl,
            x: 0,
            y: 0,
            size: 110
          }),

          text(
            profile.name ??
              profile.username,
            {
              x: 145,
              y: 40,
              fill: theme.colors.foreground,
              fontSize: 38,
              fontFamily:
                theme.typography.heading,
              fontWeight: 700
            }
          ),

          text(
            `@${profile.username}`,
            {
              x: 145,
              y: 72,
              fill: theme.colors.accent,
              fontSize: 16,
              fontFamily:
                theme.typography.mono
            }
          ),

          text(
            profile.bio ??
              "Developer",
            {
              x: 145,
              y: 105,
              fill: theme.colors.secondary,
              fontSize: 16,
              fontFamily:
                theme.typography.body
            }
          ),

          line({
            x1: 145,
            y1: 120,
            x2: 700,
            y2: 120,
            stroke: theme.colors.primary,
            strokeWidth: 1,
            opacity: 0.7
          }),

          text(
            "SYSTEM ONLINE // PROFILE LOADED",
            {
              x: 720,
              y: 40,
              fill: theme.colors.primary,
              fontSize: 12,
              fontFamily:
                theme.typography.mono
            }
          )
        ].join("")
      );
    }
  };