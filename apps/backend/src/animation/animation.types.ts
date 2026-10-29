export type AnimationProperty =
  | "opacity"
  | "transform"
  | "filter"
  | "stroke-dashoffset"
  | "clip-path";

export type AnimationPreset =
  | "none"
  | "minimal-fade"
  | "cinematic-reveal"
  | "retro-boot"
  | "terminal"
  | "pixel-reveal";

export type Easing =
  | "linear"
  | "ease"
  | "ease-in"
  | "ease-out"
  | "ease-in-out"
  | "spring";

export interface AnimationStep {
  id: string;
  selector: string;
  property: AnimationProperty;
  from: string;
  to: string;
  duration: number;
  delay: number;
  easing: Easing;
  iterationCount?: number | "infinite";
}

export interface AnimationTimeline {
  duration: number;
  steps: AnimationStep[];
}

export interface AnimationConfig {
  preset: AnimationPreset;
  enabled: boolean;
  reducedMotion: boolean;
}