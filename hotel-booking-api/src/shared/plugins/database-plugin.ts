import type { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

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

const databasePluginImpl: FastifyPluginAsync<DatabasePluginOptions> = async (
  app,
  { env }
) => {
  const pool = createPgPool(env);
  const dbLogMeta = getDbLogMeta(env);

  app.log.info('Connecting to PostgreSQL');

  pool.on('error', (error) => {
    app.log.error({ err: error, ...dbLogMeta }, 'PostgreSQL pool error');
  });

  try {
    await pool.query('SELECT 1');
    app.log.info('PostgreSQL connected');
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

export const databasePlugin = fp(databasePluginImpl, {
  name: 'database-plugin'
});