import type { ServiceStatus } from '../../domain/entities/service-status';
import type { SystemReadRepository } from '../../domain/repositories/system-read.repository';

export class StaticSystemRepository implements SystemReadRepository {
  getServiceStatus(): ServiceStatus {
    return { root: true };
  }

  getExampleMessage(): string {
    return 'this is an example';
  }
}
