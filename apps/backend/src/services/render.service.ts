import type { ProfileService } from "./profile.service.js";
import type { DesignRegistry } from "./design-registry.service.js";

export class RenderService {
  constructor(
    private readonly profileService: ProfileService,
    private readonly designRegistry: DesignRegistry
  ) {}

  async render(
    designId: string,
    username: string
  ): Promise<string> {

    const design =
      this.designRegistry.get(designId);

    if (!design) {
      throw new Error(
        `Design not found: ${designId}`
      );
    }

    const profile =
      await this.profileService.getProfile(
        username
      );

    return design.render({
      profile,
      theme: design.theme
    });
  }
}