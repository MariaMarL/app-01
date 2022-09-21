import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientQueryHandlers } from './queries';
import { CommonModule } from '../common/common.module';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientCommandHandlers } from './commands';

@Module({
  imports: [CommonModule, CqrsModule],
  controllers: [ClientsController],
  providers: [...ClientQueryHandlers,
              ...ClientCommandHandlers]
})
export class ClientsModule {}
