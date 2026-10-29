import { GitHubAdapter } from "../adapters/github.adapter.js";
import { RepositoryData } from "../types/repository.js";
import type { ProfileData } from "../types/profile.js";
import type { GitHubRepository } from "../adapters/github.adapter.js";
import type { LanguageData } from "../types/language.js";
import { CacheService } from "./cache.service.js";
import {
  profileCacheKey,
  CACHE_TTL
} from "../config/cache.js";

export class ProfileService {
  constructor(
    private readonly githubAdapter: GitHubAdapter,
    private readonly cache: CacheService
  ) { }

  async getProfile(username: string): Promise<ProfileData> {

    const cacheKey = profileCacheKey(username);
    
    const cached = this.cache.get<ProfileData>(cacheKey);
    
    if (cached) {
      return cached;
    }
    
    const [user, repositories] = await Promise.all([
      this.githubAdapter.getUser(username),
      this.githubAdapter.getRepositories(username, 10)
    ]);
  
    const normalizedRepositories = repositories
      .filter((repository) => !repository.fork)
      .map((repository) =>
        this.normalizeRepository(repository)
      );
  
    const rawLanguages =
      await this.githubAdapter.getLanguagesForRepositories(
        username,
        repositories.filter((repository) => !repository.fork)
      );
  
    const languages = this.normalizeLanguages(rawLanguages);
  
    const profile: ProfileData = {
      username: user.login,
      name: user.name,
  
      avatarUrl: user.avatar_url,
      profileUrl: user.html_url,
  
      bio: user.bio,
      company: user.company,
      location: user.location,
  
      website: user.blog || null,
  
      followers: user.followers,
      following: user.following,
  
      publicRepos: user.public_repos,
      publicGists: user.public_gists,
  
      repositories: normalizedRepositories,
      languages,
  
      createdAt: user.created_at,
      updatedAt: user.updated_at
    };
    this.cache.set(
      cacheKey,
      profile,
      CACHE_TTL.PROFILE 
    );
    
    return profile;
  }


  private normalizeRepository(
    repository: GitHubRepository
  ): RepositoryData {
    return {
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
  
      description: repository.description,
      url: repository.html_url,
  
      language: repository.language,
  
      stars: repository.stargazers_count,
      forks: repository.forks_count,
  
      topics: repository.topics,
  
      isFork: repository.fork,
      isArchived: repository.archived,
  
      createdAt: repository.created_at,
      updatedAt: repository.updated_at
    };
  }

  private normalizeLanguages(
    languages: Record<string, number>
  ): LanguageData[] {
    const totalBytes = Object.values(languages).reduce(
      (total, bytes) => total + bytes,
      0
    );
  
    if (totalBytes === 0) {
      return [];
    }
  
    return Object.entries(languages)
      .map(([name, bytes]) => ({
        name,
        bytes,
        percentage: Number(
          ((bytes / totalBytes) * 100).toFixed(2)
        )
      }))
      .sort((a, b) => b.bytes - a.bytes);
  }
}