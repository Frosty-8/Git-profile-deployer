import { env } from "../config/env.js";

const GITHUB_API_URL = "https://api.github.com";

export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  bio: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}


export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;

  html_url: string;

  description: string | null;

  language: string | null;

  stargazers_count: number;
  forks_count: number;

  topics: string[];

  fork: boolean;
  archived: boolean;

  created_at: string;
  updated_at: string;
}

export class GitHubAdapter {
  private readonly headers: Record<string, string>;

  constructor() {
    this.headers = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "Frosty-Design-Studio"
    };

    if (env.GITHUB_TOKEN) {
      this.headers.Authorization = `Bearer ${env.GITHUB_TOKEN}`;
    }
  }

  async getUser(username: string): Promise<GitHubUser> {
    const response = await fetch(
      `${GITHUB_API_URL}/users/${encodeURIComponent(username)}`,
      {
        headers: this.headers
      }
    );

    if (!response.ok) {
      throw new Error(
        `GitHub API request failed: ${response.status} ${response.statusText}`
      );
    }

    return response.json() as Promise<GitHubUser>;
  }


  async getRepositories(
    username: string,
    limit = 10
  ): Promise<GitHubRepository[]> {
    const response = await fetch(
      `${GITHUB_API_URL}/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=${limit}`,
      {
        headers: this.headers
      }
    );
  
    if (!response.ok) {
      throw new Error(
        `GitHub repositories request failed: ${response.status} ${response.statusText}`
      );
    }
  
    return response.json() as Promise<GitHubRepository[]>;
  }

  async getLanguages(
    username: string,
    repository: string
  ): Promise<Record<string, number>> {
    const response = await fetch(
      `${GITHUB_API_URL}/repos/${encodeURIComponent(username)}/${encodeURIComponent(repository)}/languages`,
      {
        headers: this.headers
      }
    );
  
    if (!response.ok) {
      throw new Error(
        `GitHub languages request failed: ${response.status} ${response.statusText}`
      );
    }
  
    return response.json() as Promise<Record<string, number>>;
  }

  async getLanguagesForRepositories(
    username: string,
    repositories: GitHubRepository[]
  ): Promise<Record<string, number>> {
    const languageResults = await Promise.all(
      repositories.map((repository) =>
        this.getLanguages(username, repository.name)
      )
    );
  
    const totals: Record<string, number> = {};
  
    for (const languages of languageResults) {
      for (const [language, bytes] of Object.entries(languages)) {
        totals[language] = (totals[language] ?? 0) + bytes;
      }
    }
  
    return totals;
  }
  
}