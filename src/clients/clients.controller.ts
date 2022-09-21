import { Body, Controller, Get, Post, Query, UnauthorizedException } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ClientResponse } from './interfaces/client-response.interface';
import { GetClientsQuery } from './queries/get-clients/get-clients.query';
import { PaginationDto } from '../common/dto/pagination.dto';
import { CreateClientDto } from './dto/create-client.dto';
import { CreateClientCommand } from './commands/create-client/create-client.command';

@Controller('clients')
export class ClientsController {

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    ) {}


    @Get()
    findAll(@Query() paginationDto: PaginationDto): Promise<ClientResponse>{

      return this.queryBus.execute<GetClientsQuery, ClientResponse>(
        new GetClientsQuery(paginationDto),
      )
    }

    @Post()
    async createClient(@Body() createClient: CreateClientDto): Promise<any>{

      return this.commandBus.execute(
        new CreateClientCommand(createClient)
      )
    }
}
