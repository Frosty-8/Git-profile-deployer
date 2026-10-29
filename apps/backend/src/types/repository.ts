export interface RepositoryData {
  id: number;
  name: string;
  fullName: string;

  description: string | null;
  url: string;

  language: string | null;

  stars: number;
  forks: number;

  topics: string[];

  isFork: boolean;
  isArchived: boolean;

  createdAt: string;
  updatedAt: string;
}