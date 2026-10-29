import { attrs, escapeXml } from "./helpers.js";

export function text(
  value: string,
  options: {
    x: number;
    y: number;
    fill?: string;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: number | string;
    textAnchor?: "start" | "middle" | "end";
    opacity?: number;
  }
): string {
  return `
<text ${attrs({
    x: options.x,
    y: options.y,
    fill: options.fill,
    "font-size": options.fontSize,
    "font-family": options.fontFamily,
    "font-weight": options.fontWeight,
    "text-anchor": options.textAnchor,
    opacity: options.opacity
  })}>
  ${escapeXml(value)}
</text>
`.trim();
}

export function svg(
  width: number,
  height: number,
  content: string,
  viewBox = `0 0 ${width} ${height}`
): string {
  return `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="${width}"
  height="${height}"
  viewBox="${viewBox}"
>
${content}
</svg>
`.trim();
}

export function rect(
  options: {
    x: number;
    y: number;
    width: number;
    height: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    rx?: number;
    opacity?: number;
  }
): string {
  return `<rect ${attrs({
    x: options.x,
    y: options.y,
    width: options.width,
    height: options.height,
    fill: options.fill,
    stroke: options.stroke,
    "stroke-width": options.strokeWidth,
    rx: options.rx,
    opacity: options.opacity
  })}/>`;
}

export function circle(
  options: {
    cx: number;
    cy: number;
    r: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    opacity?: number;
  }
): string {
  return `<circle ${attrs({
    cx: options.cx,
    cy: options.cy,
    r: options.r,
    fill: options.fill,
    stroke: options.stroke,
    "stroke-width": options.strokeWidth,
    opacity: options.opacity
  })}/>`;
}

export function line(
  options: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    stroke?: string;
    strokeWidth?: number;
    opacity?: number;
  }
): string {
  return `<line ${attrs({
    x1: options.x1,
    y1: options.y1,
    x2: options.x2,
    y2: options.y2,
    stroke: options.stroke,
    "stroke-width": options.strokeWidth,
    opacity: options.opacity
  })}/>`;
}

export function image(
  options: {
    href: string;
    x: number;
    y: number;
    width: number;
    height: number;
    preserveAspectRatio?: string;
    opacity?: number;
  }
): string {
  return `
<image ${attrs({
    href: options.href,
    x: options.x,
    y: options.y,
    width: options.width,
    height: options.height,
    preserveAspectRatio:
      options.preserveAspectRatio ?? "xMidYMid slice",
    opacity: options.opacity
  })}/>
`.trim();
}

export function group(
  content: string,
  options?: {
    transform?: string;
    opacity?: number;
  }
): string {
  return `
<g ${attrs({
    transform: options?.transform,
    opacity: options?.opacity
  })}>
${content}
</g>
`.trim();
}