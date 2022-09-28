import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateDepositDto } from './dto/deposit-account/create-deposit.dto';
import { CommandBus } from '@nestjs/cqrs';
import { createDepositTransactionDto } from './dto/deposit-transaction/create-depositTransaction.dto';
import { CreateDepositTransactionCommand } from './command/depositTransaction/create-depositTransaction.command';
import { CreateDepositComamnd } from './command/depositAccount/create-deposit.command';
import { CreateDepositWithdrawalDto } from './dto/deposit-Withdrawal/create-depositWithdrawal.dto';
import { CreateDepositWithDrawalCommand } from './command/depositWithdrawal/create-depositWithdrawal.command';
import { CreateTransferDto } from './dto/transfer/create-transfer.dto';
import { CreateTransferCommand } from './command/transfer/create-transfer.command';

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

  @Post('deposit-transaction/:depositAccountId')
  async depositTransaction ( 
    @Body() depositTransactionDto:createDepositTransactionDto,
    @Param('depositAccountId') depositAccountId:string
    ){
    return await this.commandBus.execute<CreateDepositTransactionCommand>(
      new CreateDepositTransactionCommand(depositTransactionDto, depositAccountId)
    )
  }

  @Post('deposit-withdrawal/:depositAccountId')
  async depositWithdrawal (
    @Body() depositWithdrawaldto: CreateDepositWithdrawalDto,
    @Param('depositAccountId') depositAccountId: string
  ){
    return await this.commandBus.execute<CreateDepositWithDrawalCommand>(
      new CreateDepositWithDrawalCommand( depositWithdrawaldto, depositAccountId)
    )
  }

  @Post('transfer/:depositAccountId')
  async transfer(
    @Body() transferDto: CreateTransferDto,
    @Param('depositAccountId') depositAccountId:string 
    ){
      return await this.commandBus.execute<CreateTransferCommand>(
        
        new CreateTransferCommand(transferDto, depositAccountId)
      )
    }

}
