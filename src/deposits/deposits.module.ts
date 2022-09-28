import { Module } from '@nestjs/common';
import { DepositsController } from './deposits.controller';
import { CommonModule } from '../common/common.module';
import { CqrsModule } from '@nestjs/cqrs';
import { depositsCommandHandlers } from './command';

@Module({
  imports:[CommonModule, CqrsModule],
  controllers: [DepositsController],
  providers: [
    ...depositsCommandHandlers
  ]
})
export class DepositsModule {}
