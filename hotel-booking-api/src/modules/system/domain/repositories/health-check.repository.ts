export interface HealthCheckRepository {
  isDatabaseHealthy(): Promise<boolean>;
}
