import type { Pool } from 'pg';

import type { HealthCheckRepository } from '../../domain/repositories/health-check.repository';

export class PgHealthCheckRepository implements HealthCheckRepository {
  constructor(private readonly db: Pool) {}

  async isDatabaseHealthy(): Promise<boolean> {
    try {
      await this.db.query('SELECT 1');
      return true;
    } catch {
      return false;
    }
  }
}
