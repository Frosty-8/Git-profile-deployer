import { GitHubAdapter } from "../adapters/github.adapter.js";
import { CacheService } from "../services/cache.service.js";
import { ProfileService } from "../services/profile.service.js";

const githubAdapter = new GitHubAdapter();

const cacheService = new CacheService();

export const profileService = new ProfileService(
  githubAdapter,
  cacheService
);