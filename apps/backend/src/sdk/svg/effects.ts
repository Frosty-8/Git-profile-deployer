import { attrs, escapeXml } from "./helpers.js";

export function linearGradient(
  id: string,
  stops: Array<{
    offset: string;
    color: string;
    opacity?: number;
  }>,
  options?: {
    x1?: string;
    y1?: string;
    x2?: string;
    y2?: string;
  }
): string {
  const stopMarkup = stops
    .map(
      (stop) =>
        `<stop ${attrs({
          offset: stop.offset,
          "stop-color": stop.color,
          "stop-opacity": stop.opacity
        })}/>`
    )
    .join("");

  return `
<linearGradient ${attrs({
    id,
    x1: options?.x1 ?? "0%",
    y1: options?.y1 ?? "0%",
    x2: options?.x2 ?? "100%",
    y2: options?.y2 ?? "100%"
  })}>
${stopMarkup}
</linearGradient>
`.trim();
}

export function defs(content: string): string {
  return `<defs>${content}</defs>`;
}

export function glowFilter(
  id: string,
  stdDeviation = 8
): string {
  return `
<filter id="${escapeXml(id)}">
  <feGaussianBlur
    stdDeviation="${stdDeviation}"
    result="blur"
  />
  <feMerge>
    <feMergeNode in="blur"/>
    <feMergeNode in="SourceGraphic"/>
  </feMerge>
</filter>
`.trim();
}