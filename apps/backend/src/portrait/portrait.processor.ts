import sharp from "sharp";
import type {
  PortraitMode,
  PortraitOptions,
  ProcessedPortrait,
} from "./portrait.types.js";

export class PortraitProcessor {
  async process(
    imageUrl: string,
    options: PortraitOptions,
  ): Promise<ProcessedPortrait> {
    const { mode, width, height } = options;

    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch portrait: ${response.status}`,
      );
    }

    const buffer = Buffer.from(
      await response.arrayBuffer(),
    );

    let image = sharp(buffer)
      .resize(width, height, {
        fit: "cover",
        position: "centre",
      });

    switch (mode) {
      case "normal":
        break;

      case "circular":
        image = image
          .composite([
            {
              input: Buffer.from(
                `<svg width="${width}" height="${height}">
                  <circle
                    cx="${width / 2}"
                    cy="${height / 2}"
                    r="${Math.min(width, height) / 2}"
                    fill="white"
                  />
                </svg>`,
              ),
              blend: "dest-in",
            },
          ]);
        break;

      case "grayscale":
        image = image.grayscale();
        break;

      case "duotone":
        image = image
          .grayscale()
          .tint("#00F5FF");
        break;

      case "pixel":
        image = image
          .resize(
            Math.max(16, Math.floor(width / 8)),
            Math.max(16, Math.floor(height / 8)),
            {
              fit: "cover",
            },
          )
          .resize(width, height, {
            kernel: sharp.kernel.nearest,
          });
        break;

      case "neon":
        image = image
          .grayscale()
          .modulate({
            brightness: 0.9,
            saturation: 1.8,
          })
          .tint("#FF2BD6");
        break;

      case "glitch":
        image = image
          .modulate({
            saturation: 1.5,
          })
          .sharpen();
        break;

      case "halftone":
        image = image
          .grayscale()
          .threshold(128);
        break;

      case "ascii":
        image = image
          .grayscale()
          .resize(width, height);
        break;

      default: {
        const exhaustive: never = mode;
        throw new Error(
          `Unsupported portrait mode: ${exhaustive}`,
        );
      }
    }

    const output = await image
      .png()
      .toBuffer();

    return {
      mode,
      width,
      height,
      mimeType: "image/png",
      dataUri:
        `data:image/png;base64,${output.toString("base64")}`,
    };
  }
}