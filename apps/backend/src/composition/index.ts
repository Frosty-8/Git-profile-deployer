import type {
  DesignSection
} from "../types/design.js";

import type {
  SectionDefinition
} from "./section.js";

import { heroSection } from "./sections/hero.section.js";
import { statsSection } from "./sections/stats.section.js";
import { stackSection } from "./sections/stack.section.js";
import { projectsSection } from "./sections/projects.section.js";
import { portraitSection } from "./sections/portrait.section.js";
import { heatmapSection } from "./sections/heatmap.section.js";
import { footerSection } from "./sections/footer.section.js";

export const sectionRegistry =
  new Map<DesignSection, SectionDefinition>([
    ["hero", heroSection],
    ["stats", statsSection],
    ["stack", stackSection],
    ["projects", projectsSection],
    ["portrait", portraitSection],
    ["heatmap", heatmapSection],
    ["footer", footerSection]
  ]);