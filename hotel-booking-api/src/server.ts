import { buildApp } from './app';
import { loadEnv } from './shared/config/env';

async function start(): Promise<void> {
  const env = loadEnv();
  const app = buildApp();
  let isShuttingDown = false;

  const shutdown = async (signal: NodeJS.Signals): Promise<void> => {
    if (isShuttingDown) {
      return;
    }

    isShuttingDown = true;
    app.log.info({ signal }, 'Shutdown signal received. Closing server...');

    try {
      await app.close();
      app.log.info('Server closed gracefully');
      process.exit(0);
    } catch (error) {
      app.log.error(error, 'Failed to close server gracefully');
      process.exit(1);
    }
  };

  process.on('SIGINT', () => {
    void shutdown('SIGINT');
  });

  process.on('SIGTERM', () => {
    void shutdown('SIGTERM');
  });

  try {
    await app.listen({ host: env.HOST, port: env.PORT });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

void start();
