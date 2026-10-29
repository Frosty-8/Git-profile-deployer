import { z } from "zod";

const designCategorySchema = z.enum([
  "minimal",
  "retro",
  "cyber",
  "creative",
  "professional",
  "pixel"
]);

const designSectionSchema = z.enum([
  "wordmark",
  "hero",
  "portrait",
  "stats",
  "stack",
  "projects",
  "heatmap",
  "footer"
]);

export const designManifestSchema = z.object({
  id: z
    .string()
    .min(1)
    .max(100)
    .regex(
      /^[a-z0-9-]+$/,
      "Design ID must contain only lowercase letters, numbers and hyphens"
    ),

  name: z.string().min(1).max(100),

  version: z
    .string()
    .regex(
      /^\d+\.\d+\.\d+$/,
      "Version must follow semantic versioning"
    ),

  author: z.string().min(1).max(100),

  description: z.string().min(1).max(500),

  category: designCategorySchema,

  tags: z
    .array(z.string().min(1).max(50))
    .max(20),

  sections: z
    .array(designSectionSchema)
    .min(1),

  preview: z.object({
    thumbnail: z.string().min(1),
    width: z.number().positive(),
    height: z.number().positive()
  })
});

export type ValidatedDesignManifest =
  z.infer<typeof designManifestSchema>;