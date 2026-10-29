import type { ProcessedPortrait } from "./portrait.types.js";

interface CacheEntry {
  value: ProcessedPortrait;
  expiresAt: number;
}

export class PortraitCache {
  private readonly store =
    new Map<string, CacheEntry>();

  get(key: string): ProcessedPortrait | null {
    const entry = this.store.get(key);

    if (!entry) {
      return null;
    }

    if (Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return null;
    }

    return entry.value;
  }

  set(
    key: string,
    value: ProcessedPortrait,
    ttlMs: number,
  ): void {
    this.store.set(key, {
      value,
      expiresAt: Date.now() + ttlMs,
    });
  }
}