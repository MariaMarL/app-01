import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateDepositDto } from './dto/deposit-account/create-deposit.dto';
import { CommandBus } from '@nestjs/cqrs';
import { CreateDepositComamnd } from './command/create-deposit.command';

@Controller('deposits')
export class DepositsController {
  constructor( 
    private readonly commandBus : CommandBus  
  ) {}

  @Post()
  async create(@Body() createDepositDto: CreateDepositDto) {
    return await this.commandBus.execute<CreateDepositComamnd>(
      new CreateDepositComamnd(createDepositDto)
    );
  }


}
