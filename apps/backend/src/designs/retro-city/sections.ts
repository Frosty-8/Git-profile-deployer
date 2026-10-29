import type { DesignSection } from "../../types/design.js";
import type { SectionDefinition } from "../../composition/section.js";

import { retroHeroSection } from "./hero.js";
import { retroStatsSection } from "./stats.js";
import { retroStackSection } from "./stack.js";
import { retroProjectsSection } from "./projects.js";
import { retroFooterSection } from "./footer.js";

export const retroSectionRegistry =
  new Map<DesignSection, SectionDefinition>([
    ["hero", retroHeroSection],
    ["stats", retroStatsSection],
    ["stack", retroStackSection],
    ["projects", retroProjectsSection],
    ["footer", retroFooterSection]
  ]);