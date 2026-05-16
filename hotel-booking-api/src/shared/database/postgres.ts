import { Pool, type PoolConfig } from 'pg';

import type { AppEnv } from '../config/env';

function buildSslConfig(env: AppEnv): PoolConfig['ssl'] {
  if (!env.DB_SSL) {
    return undefined;
  }

  return {
    rejectUnauthorized: env.DB_SSL_REJECT_UNAUTHORIZED
  };
}

export function buildPgPoolConfig(env: AppEnv): PoolConfig {
  const baseConfig: PoolConfig = {
    ssl: buildSslConfig(env),
    min: env.DB_POOL_MIN,
    max: env.DB_POOL_MAX,
    idleTimeoutMillis: env.DB_IDLE_TIMEOUT_MS,
    connectionTimeoutMillis: env.DB_CONNECTION_TIMEOUT_MS
  };

  if (env.DATABASE_URL) {
    return {
      ...baseConfig,
      connectionString: env.DATABASE_URL
    };
  }

  return {
    ...baseConfig,
    host: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_NAME,
    user: env.DB_USER,
    password: env.DB_PASSWORD
  };
}

export function createPgPool(env: AppEnv): Pool {
  return new Pool(buildPgPoolConfig(env));
}
