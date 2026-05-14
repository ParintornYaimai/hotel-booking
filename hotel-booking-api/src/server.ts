import { buildApp } from './app';
import { loadEnv } from './shared/config/env';

async function start(): Promise<void> {
  const env = loadEnv();
  const app = buildApp();

  try {
    await app.listen({ host: env.HOST, port: env.PORT });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

void start();
