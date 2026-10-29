import {
  avatar
} from "../../sdk/svg/index.js";

import type { SectionDefinition } from "../section.js";

export const portraitSection: SectionDefinition = {
  id: "portrait",

  render(context) {
    const size =
      Math.min(
        context.width,
        context.height
      );

    return avatar({
      url: context.profile.avatarUrl,
      x: (context.width - size) / 2,
      y: (context.height - size) / 2,
      size
    });
  }
};