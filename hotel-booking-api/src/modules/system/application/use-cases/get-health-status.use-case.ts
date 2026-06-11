import type { HealthStatus } from '../../domain/entities/health-status';
import type { HealthCheckRepository } from '../../domain/repositories/health-check.repository';

export class GetHealthStatusUseCase {
  constructor(private readonly repository: HealthCheckRepository) {}

  async execute(): Promise<HealthStatus> {
    const isDatabaseHealthy = await this.repository.isDatabaseHealthy();

    return {
      status: isDatabaseHealthy ? 'ok' : 'error',
      database: isDatabaseHealthy ? 'up' : 'down'
    };
  }
}
