export type DesignCategory =
  | "minimal"
  | "retro"
  | "cyber"
  | "creative"
  | "professional"
  | "pixel";

export type DesignSection =
  | "wordmark"
  | "hero"
  | "portrait"
  | "stats"
  | "stack"
  | "projects"
  | "heatmap"
  | "footer";

export interface DesignPreview {
  thumbnail: string;
  width: number;
  height: number;
}

export interface DesignManifest {
  id: string;
  name: string;
  version: string;
  author: string;
  description: string;
  category: DesignCategory;
  tags: string[];
  sections: DesignSection[];
  preview: DesignPreview;
}

export interface DesignTheme {
  colors: {
    background: string;
    foreground: string;
    primary: string;
    secondary: string;
    muted: string;
    accent: string;
  };

  typography: {
    heading: string;
    body: string;
    mono: string;
  };

  radius: {
    small: number;
    medium: number;
    large: number;
  };
}

export interface DesignRenderContext {
  profile: import("./profile.js").ProfileData;
  theme: DesignTheme;
}

export interface DesignDefinition {
  manifest: DesignManifest;
  theme: DesignTheme;

  render(
    context: DesignRenderContext
  ): string;
}