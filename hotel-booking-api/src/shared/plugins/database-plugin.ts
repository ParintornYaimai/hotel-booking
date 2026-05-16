import type { FastifyPluginAsync } from 'fastify';

import type { AppEnv } from '../config/env';
import { createPgPool } from '../database/postgres';

interface DatabasePluginOptions {
  env: AppEnv;
}

type DbLogMeta = {
  connectionSource: 'DATABASE_URL' | 'ENV_FIELDS';
  dbHost?: string;
  dbPort?: number;
  dbName?: string;
};

function getDbLogMeta(env: AppEnv): DbLogMeta {
  if (!env.DATABASE_URL) {
    return {
      connectionSource: 'ENV_FIELDS',
      dbHost: env.DB_HOST,
      dbPort: env.DB_PORT,
      dbName: env.DB_NAME
    };
  }

  try {
    const parsed = new URL(env.DATABASE_URL);
    return {
      connectionSource: 'DATABASE_URL',
      dbHost: parsed.hostname || undefined,
      dbPort: parsed.port ? Number(parsed.port) : undefined,
      dbName: parsed.pathname.replace(/^\//, '') || undefined
    };
  } catch {
    return {
      connectionSource: 'DATABASE_URL'
    };
  }
}

export const databasePlugin: FastifyPluginAsync<DatabasePluginOptions> = async (
  app,
  { env }
) => {
  if (!env.DB_ENABLED) {
    app.decorate('db', null);
    app.log.info('PostgreSQL disabled (`DB_ENABLED=false`)');
    return;
  }

  const pool = createPgPool(env);
  const dbLogMeta = getDbLogMeta(env);

  app.log.info(
    {
      ...dbLogMeta,
      poolMin: env.DB_POOL_MIN,
      poolMax: env.DB_POOL_MAX
    },
    'Connecting to PostgreSQL'
  );

  pool.on('error', (error) => {
    app.log.error({ err: error, ...dbLogMeta }, 'PostgreSQL pool error');
  });

  try {
    await pool.query('SELECT 1');
    app.log.info(dbLogMeta, 'PostgreSQL connected');
  } catch (error) {
    app.log.error({ err: error, ...dbLogMeta }, 'PostgreSQL connection failed');
    await pool.end();
    throw error;
  }

  app.decorate('db', pool);

  app.addHook('onClose', async () => {
    await pool.end();
    app.log.info(dbLogMeta, 'PostgreSQL pool closed');
  });
};
