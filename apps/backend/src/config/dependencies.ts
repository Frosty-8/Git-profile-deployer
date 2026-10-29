import { GitHubAdapter } from "../adapters/github.adapter.js";
import { CacheService } from "../services/cache.service.js";
import { ProfileService } from "../services/profile.service.js";
import { DesignRegistry } from "../services/design-registry.service.js";

import { minimalEditorialDesign } from "../designs/minimal-editorial/index.js";

const githubAdapter = new GitHubAdapter();

const cacheService = new CacheService();

export const profileService = new ProfileService(
  githubAdapter,
  cacheService
);

export const designRegistry = new DesignRegistry();

designRegistry.register(
  minimalEditorialDesign
);