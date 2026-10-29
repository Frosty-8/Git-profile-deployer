import {
  defs,
  linearGradient,
  glowFilter,
  rect,
  line
} from "../../sdk/svg/index.js";

import type { DesignTheme } from "../../types/design.js";

export function retroCityBackground(
  theme: DesignTheme
): string {
  const gradient = linearGradient(
    "retroBackground",
    [
      {
        offset: "0%",
        color: theme.colors.background
      },
      {
        offset: "55%",
        color: "#16002D"
      },
      {
        offset: "100%",
        color: "#050008"
      }
    ],
    {
      x1: "0%",
      y1: "0%",
      x2: "0%",
      y2: "100%"
    }
  );

  const glow = glowFilter(
    "retroGlow",
    6
  );

  const horizon = line({
    x1: 0,
    y1: 530,
    x2: 1200,
    y2: 530,
    stroke: theme.colors.accent,
    strokeWidth: 2,
    opacity: 0.8
  });

  const gridLines: string[] = [];

  for (let i = 0; i < 12; i++) {
    const y = 540 + i * 8;

    gridLines.push(
      line({
        x1: 0,
        y1: y,
        x2: 1200,
        y2: y,
        stroke: theme.colors.primary,
        strokeWidth: 1,
        opacity: Math.max(
          0.05,
          0.35 - i * 0.02
        )
      })
    );
  }

  return `
    ${defs(`
      ${gradient}
      ${glow}
    `)}
  
    ${rect({
      x: 0,
      y: 0,
      width: 1200,
      height: 630,
      fill: "url(#retroBackground)"
    })}
  
    ${retroSkyline(theme)}

    ${retroCityLights(theme)}
  
    ${horizon}
  
    <g filter="url(#retroGlow)">
      ${gridLines.join("\n")}
    </g>
  `;
}

export function retroSkyline(
  theme: DesignTheme
): string {
  const buildings = [
    { x: 0, width: 90, height: 65 },
    { x: 90, width: 70, height: 95 },
    { x: 160, width: 120, height: 55 },
    { x: 280, width: 80, height: 125 },
    { x: 360, width: 110, height: 75 },
    { x: 470, width: 65, height: 150 },
    { x: 535, width: 100, height: 85 },
    { x: 635, width: 75, height: 130 },
    { x: 710, width: 130, height: 70 },
    { x: 840, width: 90, height: 110 },
    { x: 930, width: 115, height: 75 },
    { x: 1045, width: 70, height: 140 },
    { x: 1115, width: 85, height: 95 }
  ];

  return buildings
    .map((building) => {
      const y = 530 - building.height;

      return `
        <rect
          x="${building.x}"
          y="${y}"
          width="${building.width}"
          height="${building.height}"
          fill="#050009"
          stroke="${theme.colors.muted}"
          stroke-width="1"
        />
      `;
    })
    .join("");
}

export function retroCityLights(
  theme: DesignTheme
): string {
  const lights: string[] = [];

  const buildings = [
    { x: 15, y: 485 },
    { x: 110, y: 460 },
    { x: 185, y: 490 },
    { x: 300, y: 425 },
    { x: 390, y: 475 },
    { x: 485, y: 400 },
    { x: 550, y: 465 },
    { x: 650, y: 420 },
    { x: 725, y: 480 },
    { x: 855, y: 440 },
    { x: 945, y: 475 },
    { x: 1060, y: 410 },
    { x: 1130, y: 455 }
  ];

  buildings.forEach(
    (building, buildingIndex) => {
      for (let row = 0; row < 4; row++) {
        lights.push(`
          <rect
            x="${building.x}"
            y="${building.y + row * 12}"
            width="5"
            height="4"
            rx="1"
            fill="${
              buildingIndex % 2 === 0
                ? theme.colors.primary
                : theme.colors.accent
            }"
            opacity="${
              0.3 + (row % 2) * 0.25
            }"
          />
        `);
      }
    }
  );

  return lights.join("");
}