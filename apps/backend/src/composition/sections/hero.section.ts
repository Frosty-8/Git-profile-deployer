import {
  avatar,
  group,
  text
} from "../../sdk/svg/index.js";

import type { SectionDefinition } from "../section.js";

export const heroSection: SectionDefinition = {
  id: "hero",

  render(context) {
    const {
      profile,
      theme,
      height
    } = context;

    const avatarSize = Math.min(100, height - 20);

    return group(
      [
        avatar({
          url: profile.avatarUrl,
          x: 0,
          y: 0,
          size: avatarSize
        }),
    
        text(
          profile.name ?? profile.username,
          {
            x: avatarSize + 24,
            y: 38,
            fill: theme.colors.foreground,
            fontSize: 32,
            fontFamily: theme.typography.heading,
            fontWeight: 700
          }
        ),
    
        text(
          `@${profile.username}`,
          {
            x: avatarSize + 24,
            y: 68,
            fill: theme.colors.secondary,
            fontSize: 16,
            fontFamily: theme.typography.mono
          }
        ),
    
        text(
          profile.bio ?? "Developer",
          {
            x: avatarSize + 24,
            y: 96,
            fill: theme.colors.secondary,
            fontSize: 15,
            fontFamily: theme.typography.body
          }
        )
      ].join("")
    );
  }
};