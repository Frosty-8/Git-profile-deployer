export function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function attrs(
  values: Record<string, string | number | undefined>
): string {
  return Object.entries(values)
    .filter(([, value]) => value !== undefined)
    .map(
      ([key, value]) =>
        `${key}="${escapeXml(String(value))}"`
    )
    .join(" ");
}

export function children(
  content: Array<string | undefined | null>
): string {
  return content
    .filter(Boolean)
    .join("");
}