import {
  circle,
  group,
  image,
  rect,
  text
} from "./elements.js";

import type { DesignTheme } from "../../types/design.js";

export function panel(
  options: {
    x: number;
    y: number;
    width: number;
    height: number;
    theme: DesignTheme;
    opacity?: number;
  }
): string {
  return rect({
    x: options.x,
    y: options.y,
    width: options.width,
    height: options.height,
    fill: options.theme.colors.background,
    stroke: options.theme.colors.muted,
    strokeWidth: 1,
    rx: options.theme.radius.medium,
    opacity: options.opacity
  });
}

export function avatar(
  options: {
    url: string;
    x: number;
    y: number;
    size: number;
  }
): string {
  return group(
    [
      circle({
        cx: options.x + options.size / 2,
        cy: options.y + options.size / 2,
        r: options.size / 2,
        fill: "#000"
      }),

      image({
        href: options.url,
        x: options.x,
        y: options.y,
        width: options.size,
        height: options.size
      })
    ].join("")
  );
}

export function badge(
  label: string,
  options: {
    x: number;
    y: number;
    theme: DesignTheme;
  }
): string {
  const width = Math.max(80, label.length * 9 + 24);

  return group(
    [
      rect({
        x: options.x,
        y: options.y,
        width,
        height: 30,
        fill: options.theme.colors.primary,
        rx: options.theme.radius.small
      }),

      text(label, {
        x: options.x + width / 2,
        y: options.y + 20,
        fill: options.theme.colors.background,
        fontSize: 13,
        fontFamily: options.theme.typography.mono,
        textAnchor: "middle"
      })
    ].join("")
  );
}