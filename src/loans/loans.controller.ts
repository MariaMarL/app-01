import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UpdateLoanDto } from './dto/change-state-loan/update-loan.dto';
import { CreateLoanDto } from './dto';
import { CreateLoanCommand } from './command/create-loan/create-loan.command';
import { CommandBus } from '@nestjs/cqrs';

@Controller('loans')
export class LoansController {
  
  constructor(
    private readonly commandBus: CommandBus
  ) {}

  @Post()
  async create(@Body() createLoanDto: CreateLoanDto) {
    return await this.commandBus.execute<CreateLoanCommand>(
      new CreateLoanCommand(createLoanDto)
    )
  }

  // @Get()
  // findAll() {
  //   return this.loansService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.loansService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLoanDto: UpdateLoanDto) {
  //   return this.loansService.update(+id, updateLoanDto);
  // }

}
