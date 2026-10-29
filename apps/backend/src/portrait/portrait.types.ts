export type PortraitMode =
  | "normal"
  | "circular"
  | "grayscale"
  | "duotone"
  | "pixel"
  | "halftone"
  | "ascii"
  | "neon"
  | "glitch";

export interface PortraitOptions {
  mode: PortraitMode;
  width: number;
  height: number;
}

export interface ProcessedPortrait {
  mode: PortraitMode;
  width: number;
  height: number;
  dataUri: string;
  mimeType: "image/png";
}