import type { ServiceStatus } from '../entities/service-status';

export interface SystemReadRepository {
  getServiceStatus(): ServiceStatus;
  getExampleMessage(): string;
}
