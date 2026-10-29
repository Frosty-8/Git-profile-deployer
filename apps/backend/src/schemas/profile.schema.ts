import { z } from "zod";

export const profileParamsSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1, "Username is required")
    .max(39, "Invalid GitHub username")
    .regex(
      /^[a-zA-Z0-9-]+$/,
      "Invalid GitHub username"
    )
});

export const profileResponseSchema = z.object({
  username: z.string(),
  name: z.string().nullable(),
  avatarUrl: z.string().url(),
  profileUrl: z.string().url(),

  bio: z.string().nullable(),
  company: z.string().nullable(),
  location: z.string().nullable(),
  website: z.string().nullable(),

  followers: z.number(),
  following: z.number(),

  publicRepos: z.number(),
  publicGists: z.number(),

  createdAt: z.string(),
  updatedAt: z.string()
});