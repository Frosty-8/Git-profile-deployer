import {
  circle,
  group,
  text
} from "../../sdk/svg/index.js";

import type { SectionDefinition } from "../../composition/section.js";

export const retroHeroSection: SectionDefinition = {
  id: "hero",

  render(context) {
    const {
      profile,
      theme,
      height
    } = context;

    const avatarSize = Math.min(
      130,
      height - 20
    );

    const centerY = height / 2;

    const particles = Array.from(
      { length: 12 },
      (_, index) => {
        const x = 30 + (index * 73) % 500;
        const y = 20 + (index * 41) % 110;

        return `
          <circle
            cx="${x}"
            cy="${y}"
            r="${index % 3 === 0 ? 2 : 1}"
            fill="${index % 2 === 0
              ? theme.colors.accent
              : theme.colors.primary}"
            opacity="0.55"
          />
        `;
      }
    ).join("");

    return `
      ${particles}

      <g>
        <circle
          cx="${avatarSize / 2}"
          cy="${centerY}"
          r="${avatarSize / 2 + 10}"
          fill="none"
          stroke="${theme.colors.primary}"
          stroke-width="3"
          opacity="0.8"
        />

        <circle
          cx="${avatarSize / 2}"
          cy="${centerY}"
          r="${avatarSize / 2 + 17}"
          fill="none"
          stroke="${theme.colors.accent}"
          stroke-width="1"
          stroke-dasharray="4 8"
          opacity="0.7"
        />

        <image
          href="${profile.avatarUrl}"
          x="0"
          y="${centerY - avatarSize / 2}"
          width="${avatarSize}"
          height="${avatarSize}"
          preserveAspectRatio="xMidYMid slice"
        />
      </g>

      ${text(
        "SYSTEM ONLINE",
        {
          x: avatarSize + 40,
          y: centerY - 38,
          fill: theme.colors.accent,
          fontSize: 13,
          fontFamily: theme.typography.mono,
          fontWeight: 700
        }
      )}

      ${text(
        profile.name ?? profile.username,
        {
          x: avatarSize + 40,
          y: centerY + 5,
          fill: theme.colors.foreground,
          fontSize: 38,
          fontFamily: theme.typography.heading,
          fontWeight: 800
        }
      )}

      ${text(
        `@${profile.username}`,
        {
          x: avatarSize + 42,
          y: centerY + 32,
          fill: theme.colors.secondary,
          fontSize: 16,
          fontFamily: theme.typography.mono
        }
      )}

      ${text(
        (profile.bio ?? "Building useful things.")
          .slice(0, 65),
        {
          x: avatarSize + 42,
          y: centerY + 63,
          fill: theme.colors.foreground,
          fontSize: 15,
          fontFamily: theme.typography.body
        }
      )}
    `;
  }
};