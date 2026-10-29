import type {
  DesignRenderContext,
  DesignSection
} from "../types/design.js";

export interface SectionContext
  extends DesignRenderContext {
  width: number;
  height: number;
}

export interface SectionDefinition {
  id: DesignSection;

  render(context: SectionContext): string;
}