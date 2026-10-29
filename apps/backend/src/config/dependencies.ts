import { GitHubAdapter } from "../adapters/github.adapter.js";
import { CacheService } from "../services/cache.service.js";
import { ProfileService } from "../services/profile.service.js";
import { DesignRegistry } from "../services/design-registry.service.js";

import { minimalEditorialDesign } from "../designs/minimal-editorial/index.js";

import { retroCityDesign } from "../designs/retro-city/index.js";

import {
  PortraitCache,
  PortraitProcessor,
  PortraitService,
} from "../portrait/index.js";

import {
  RenderService
} from "../services/render.service.js";

const githubAdapter = new GitHubAdapter();

const cacheService = new CacheService();

export const profileService = new ProfileService(
  githubAdapter,
  cacheService
);

export const designRegistry = new DesignRegistry();

export const portraitService =
  new PortraitService(
    new PortraitProcessor(),
    new PortraitCache(),
  );

export const renderService =
  new RenderService(
    profileService,
    designRegistry
  );

designRegistry.register(
  minimalEditorialDesign
);

designRegistry.register(
  retroCityDesign
);