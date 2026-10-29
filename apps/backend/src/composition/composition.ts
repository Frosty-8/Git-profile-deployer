import { group } from "../sdk/svg/index.js";

import type { DesignSection } from "../types/design.js";
import type {
  SectionContext,
  SectionDefinition
} from "./section.js";

export interface CompositionItem {
  section: DesignSection;

  x: number;
  y: number;

  width: number;
  height: number;
}

export interface DesignComposition {
  width: number;
  height: number;

  sections: CompositionItem[];
}

export function renderComposition(
  composition: DesignComposition,
  registry: Map<DesignSection, SectionDefinition>,
  context: SectionContext
): string {
  return composition.sections
    .map((item) => {
      const section =
        registry.get(item.section);

      if (!section) {
        throw new Error(
          `Section not registered: ${item.section}`
        );
      }

      const rendered =
        section.render({
          ...context,
          width: item.width,
          height: item.height
        });

      return group(
        rendered,
        {
          transform:
            `translate(${item.x} ${item.y})`
        }
      );
    })
    .join("\n");
}