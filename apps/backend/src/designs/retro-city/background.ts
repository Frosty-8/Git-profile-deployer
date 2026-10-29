import {
  circle,
  defs,
  glowFilter,
  linearGradient,
  rect
} from "../../sdk/svg/index.js";

import type { DesignTheme } from "../../types/design.js";

export function retroBackground(
  width: number,
  height: number,
  theme: DesignTheme
): string {
  const gradientId = "retro-city-gradient";
  const glowId = "retro-city-glow";

  return `
    ${defs(`
      ${linearGradient(
        gradientId,
        [
          {
            offset: "0%",
            color: theme.colors.primary,
            opacity: 0.18
          },
          {
            offset: "50%",
            color: theme.colors.accent,
            opacity: 0.10
          },
          {
            offset: "100%",
            color: theme.colors.background,
            opacity: 0
          }
        ]
      )}

      ${glowFilter(glowId, 12)}
    `)}

    ${rect({
      x: 0,
      y: 0,
      width,
      height,
      fill: theme.colors.background
    })}

    <circle
      cx="${width * 0.82}"
      cy="${height * 0.18}"
      r="${Math.min(width, height) * 0.35}"
      fill="url(#${gradientId})"
      filter="url(#${glowId})"
      opacity="0.8"
    />

    <circle
      cx="${width * 0.15}"
      cy="${height * 0.75}"
      r="${Math.min(width, height) * 0.28}"
      fill="${theme.colors.primary}"
      opacity="0.05"
    />
  `;
}

export function skyline(
  width: number,
  height: number,
  theme: DesignTheme
): string {
  const buildings = [
    { x: 0.00, w: 0.08, h: 0.24 },
    { x: 0.08, w: 0.06, h: 0.38 },
    { x: 0.14, w: 0.10, h: 0.20 },
    { x: 0.24, w: 0.07, h: 0.46 },
    { x: 0.31, w: 0.11, h: 0.30 },
    { x: 0.42, w: 0.06, h: 0.52 },
    { x: 0.48, w: 0.09, h: 0.34 },
    { x: 0.57, w: 0.08, h: 0.43 },
    { x: 0.65, w: 0.11, h: 0.25 },
    { x: 0.76, w: 0.07, h: 0.48 },
    { x: 0.83, w: 0.09, h: 0.31 },
    { x: 0.92, w: 0.08, h: 0.40 }
  ];

  const baseY = height;

  return buildings
    .map((building, index) => {
      const x = width * building.x;
      const buildingWidth = width * building.w;
      const buildingHeight = height * building.h;
      const y = baseY - buildingHeight;

      const windows = Array.from(
        { length: 4 },
        (_, row) =>
          Array.from(
            { length: 3 },
            (_, column) => `
              <rect
                x="${x + 8 + column * 18}"
                y="${y + 14 + row * 20}"
                width="5"
                height="7"
                rx="1"
                fill="${theme.colors.accent}"
                opacity="${0.15 + ((index + row + column) % 3) * 0.12}"
              />
            `
          ).join("")
      ).join("");

      return `
        <g>
          <rect
            x="${x}"
            y="${y}"
            width="${buildingWidth}"
            height="${buildingHeight}"
            fill="#0D0618"
            stroke="${theme.colors.muted}"
            stroke-width="1"
          />

          ${windows}
        </g>
      `;
    })
    .join("");
}

export function retroGrid(
  width: number,
  height: number,
  theme: DesignTheme
): string {
  const horizon = height * 0.72;

  const horizontalLines = Array.from(
    { length: 6 },
    (_, index) => {
      const y =
        horizon +
        Math.pow(index / 5, 1.7) *
          (height - horizon);

      return `
        <line
          x1="0"
          y1="${y}"
          x2="${width}"
          y2="${y}"
          stroke="${theme.colors.accent}"
          stroke-width="1"
          opacity="${0.10 - index * 0.01}"
        />
      `;
    }
  ).join("");

  const verticalLines = Array.from(
    { length: 13 },
    (_, index) => {
      const x =
        (width / 12) * index;

      return `
        <line
          x1="${x}"
          y1="${horizon}"
          x2="${width / 2 + (x - width / 2) * 2.5}"
          y2="${height}"
          stroke="${theme.colors.primary}"
          stroke-width="1"
          opacity="0.08"
        />
      `;
    }
  ).join("");

  return `
    <g>
      ${horizontalLines}
      ${verticalLines}
    </g>
  `;
}