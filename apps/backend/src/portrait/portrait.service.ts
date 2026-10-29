import {
  PortraitCache,
} from "./portrait.cache.js";

import {
  PortraitProcessor,
} from "./portrait.processor.js";

import type {
  PortraitMode,
  ProcessedPortrait,
} from "./portrait.types.js";

const PORTRAIT_CACHE_TTL =
  30 * 60 * 1000;

export class PortraitService {
  constructor(
    private readonly processor: PortraitProcessor,
    private readonly cache: PortraitCache,
  ) {}

  async getPortrait(
    imageUrl: string,
    mode: PortraitMode,
    width: number,
    height: number,
  ): Promise<ProcessedPortrait> {
    const key = [
      imageUrl,
      mode,
      width,
      height,
    ].join(":");

    const cached = this.cache.get(key);

    if (cached) {
      return cached;
    }

    const portrait =
      await this.processor.process(
        imageUrl,
        {
          mode,
          width,
          height,
        },
      );

    this.cache.set(
      key,
      portrait,
      PORTRAIT_CACHE_TTL,
    );

    return portrait;
  }
}