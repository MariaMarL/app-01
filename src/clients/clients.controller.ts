import { Controller, Get, Query, UnauthorizedException } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ClientResponse } from './interfaces/client-response.interface';
import { GetClientsQuery } from './queries/get-clients/get-clients.query';
import { PaginationDto } from '../common/dto/pagination.dto';
import { RawHeaders } from '../common/decorators/raw-header.decorator';

@Controller('clients')
export class ClientsController {

  constructor(
    // private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    ) {}


    @Get()
    findAll(@RawHeaders() rawHeaders: string[], @Query() paginationDto: PaginationDto): Promise<ClientResponse>{

      const posicion = rawHeaders.indexOf('apikey') + 1;

      if (posicion == 0) {
        throw new UnauthorizedException('No puede ingresar, falta el apikey')
      }
  
      const apikey = rawHeaders[posicion];

      return this.queryBus.execute<GetClientsQuery, ClientResponse>(
        new GetClientsQuery(apikey, paginationDto),
      )
    }
}
