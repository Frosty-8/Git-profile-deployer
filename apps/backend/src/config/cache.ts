export const CACHE_TTL = {
  PROFILE: 5 * 60 * 1000
} as const;

export function profileCacheKey(username: string): string {
  return `profile:${username.toLowerCase()}`;
}