import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),

  PORT: z.coerce
    .number()
    .int()
    .positive()
    .default(3000),

  HOST: z
    .string()
    .default("0.0.0.0"),

  CORS_ORIGIN: z
    .string()
    .default("http://localhost:5173"),

  GITHUB_TOKEN: z
    .string()
    .optional()
});

export const env = envSchema.parse(process.env);