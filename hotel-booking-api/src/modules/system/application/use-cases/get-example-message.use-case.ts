import type { SystemReadRepository } from '../../domain/repositories/system-read.repository';

export class GetExampleMessageUseCase {
  constructor(private readonly repository: SystemReadRepository) {}

  execute(): string {
    return this.repository.getExampleMessage();
  }
}
