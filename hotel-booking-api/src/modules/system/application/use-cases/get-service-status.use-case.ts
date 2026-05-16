import type { ServiceStatus } from '../../domain/entities/service-status';
import type { SystemReadRepository } from '../../domain/repositories/system-read.repository';

export class GetServiceStatusUseCase {
  constructor(private readonly repository: SystemReadRepository) {}

  execute(): ServiceStatus {
    return this.repository.getServiceStatus();
  }
}
