import "dotenv/config";
import { z } from "zod";
import { config } from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const envFile = process.env.NODE_ENV === 'test'
  ? '.env.test'
  : (process.env.NODE_ENV === 'production'
    ? '.env.production'
    : '.env');

config({ path: resolve(__dirname, envFile) });

const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "test", "production"]).default("dev"),
  PORT: z.coerce.number().default(3333),

  JWT_SECRET: z.string(),
  EXPIRES_IN: z.string(),

  DATABASE_URL: z.string(),
  POSTGRES_USER: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_DB: z.string()
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error("Invalid environment vairables", _env.error.format());

  throw new Error("Invalid environment variables");
}

export const env = _env.data;
