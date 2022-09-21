import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateClientCommand } from './create-client.command';
import { AxiosAdapter } from '../../../common/adapters/axios.adapter';
import { ConfigService } from '@nestjs/config';
import { getHeaders } from '../../../common/helpers/headers.helper';
import { Logger } from '@nestjs/common';
import { ClientResponse } from "../../interfaces/client-response.interface";


@CommandHandler(CreateClientCommand)
export class CreateClientHandler implements ICommandHandler<CreateClientCommand>{

    constructor(
        private readonly axioss: AxiosAdapter,
        private readonly configService: ConfigService
    ){}


    async execute(command: CreateClientCommand): Promise<any> {
        
        const logger = new Logger(CreateClientHandler.name);
        logger.log('Creating a new client.')

        // const {apikey, "Idempotency-Key"} = getHeaders(this.configService)
        const headers = getHeaders(this.configService)
        

        const url1 = this.configService.get('url')
        // // console.log({apikey});
        // console.log({IdempotencyKey});
        // // console.log({url1});
        
        const {createClientDto} = command;
        const client = await this.axioss.post(
            url1,
            headers,
            createClientDto
        )
        return client
    }
    
}