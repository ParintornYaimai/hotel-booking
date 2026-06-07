import { config as loadDotEnv } from 'dotenv';
import { z } from 'zod';

loadDotEnv({ quiet: true });
const booleanFromEnv = z.preprocess((value) => {
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    if (['true', '1', 'yes', 'on'].includes(normalized)) {
      return true;
    }

    if (['false', '0', 'no', 'off', ''].includes(normalized)) {
      return false;
    }
  }

  return value;
}, z.boolean());

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().min(1).max(65535).default(3000),
  HOST: z.string().min(1).default('127.0.0.1'),
  LOG_LEVEL: z
    .enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent'])
    .default('info'),
  CORS_ORIGIN: z.string().default('*'),
  DB_ENABLED: booleanFromEnv.default(true),
  DATABASE_URL: z.string().optional(),
  DB_HOST: z.string().default('127.0.0.1'),
  DB_PORT: z.coerce.number().int().min(1).max(65535).default(5432),
  DB_NAME: z.string().default('hotel_booking'),
  DB_USER: z.string().default('hotel_user'),
  DB_PASSWORD: z.string().default('hotel_password'),
  DB_SSL: booleanFromEnv.default(false),
  DB_SSL_REJECT_UNAUTHORIZED: booleanFromEnv.default(false),
  DB_POOL_MIN: z.coerce.number().int().min(0).default(0),
  DB_POOL_MAX: z.coerce.number().int().min(1).default(10),
  DB_IDLE_TIMEOUT_MS: z.coerce.number().int().min(1).default(10000),
  DB_CONNECTION_TIMEOUT_MS: z.coerce.number().int().min(1).default(5000),
  JWT_SECRET: z.string().min(32),
  COOKIE_SECRET: z.string().min(32)
});

export type AppEnv = z.infer<typeof envSchema>;

export function loadEnv(rawEnv: NodeJS.ProcessEnv = process.env): AppEnv {
  const parsed = envSchema.safeParse(rawEnv);

  if (!parsed.success) {
    const message = parsed.error.issues
      .map((issue) => `${issue.path.join('.') || 'env'}: ${issue.message}`)
      .join('; ');

    throw new Error(`Invalid environment variables: ${message}`);
  }

  return parsed.data;
}
