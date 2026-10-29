import type {
  DesignDefinition,
  DesignManifest
} from "../types/design.js";

export class DesignRegistry {
  private readonly designs = new Map<
    string,
    DesignDefinition
  >();

  register(design: DesignDefinition): void {
    const id = design.manifest.id;

    if (this.designs.has(id)) {
      throw new Error(
        `Design already registered: ${id}`
      );
    }

    this.designs.set(id, design);
  }

  unregister(id: string): void {
    this.designs.delete(id);
  }

  get(id: string): DesignDefinition | null {
    return this.designs.get(id) ?? null;
  }

  has(id: string): boolean {
    return this.designs.has(id);
  }

  list(): DesignManifest[] {
    return Array.from(this.designs.values())
      .map((design) => design.manifest);
  }

  count(): number {
    return this.designs.size;
  }

  clear(): void {
    this.designs.clear();
  }
}