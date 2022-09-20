import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetClientsQuery } from "./get-clients.query";
import { ClientResponse } from '../../interfaces/client-response.interface';
import { AxiosAdapter } from '../../../common/adapters/axios.adapter';
import { config } from "process";
import { ConfigService } from '@nestjs/config';
import { getHeaders } from '../../../common/helpers/headers.helper';

@QueryHandler(GetClientsQuery)
export class GetClientsHandler implements IQueryHandler<GetClientsQuery> {
    
   
    constructor(
        private readonly axioss:AxiosAdapter,
        private readonly configService: ConfigService
        ){}


    async execute(query: GetClientsQuery): Promise<any> {
        const {apikey} = getHeaders(this.configService)
        const {paginationDto} = query;
        const clients =  await this.axioss.get<ClientResponse[]>(
            this.configService.get('url'), 
            apikey, 
            paginationDto
            )
        return clients;
    }
}