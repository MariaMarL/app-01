import { Module } from '@nestjs/common';
import { LoansController } from './loans.controller';
import { CommonModule } from '../common/common.module';
import { CqrsModule } from '@nestjs/cqrs';
import { loansCommandHandlers } from './command';

@Module({
  imports:[ CommonModule, CqrsModule],
  controllers: [LoansController],
  providers: [
    ...loansCommandHandlers
  ]
})
export class LoansModule {}
