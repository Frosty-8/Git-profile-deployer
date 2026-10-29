import type { LanguageData } from "./language.js";
import type { RepositoryData } from "./repository.js";

export interface ProfileData {
  username: string;
  name: string | null;
  avatarUrl: string;
  profileUrl: string;

  bio: string | null;
  company: string | null;
  location: string | null;
  website: string | null;

  followers: number;
  following: number;

  publicRepos: number;
  publicGists: number;

  repositories: RepositoryData[];
  languages: LanguageData[];

  createdAt: string;
  updatedAt: string;
}