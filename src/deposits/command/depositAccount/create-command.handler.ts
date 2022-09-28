import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
// import { AxiosAdapter } from '../../common/adapters/axios.adapter';
import { AxiosAdapter } from '../../../common/adapters/axios.adapter';
import { ConfigService } from '@nestjs/config';
import { CreateDepositComamnd } from './create-deposit.command';
import { Logger } from '@nestjs/common';
import { getHeaders } from '../../../common/helpers/headers.helper';


@CommandHandler(CreateDepositComamnd)
export class CreateDepositHandler implements ICommandHandler{

    constructor(
        private readonly axioss: AxiosAdapter,
        private readonly configService: ConfigService
    ){}

    async execute(command: CreateDepositComamnd): Promise<any> {
         
        const logger = new Logger(CreateDepositHandler.name)
        logger.log('Creating a new deposit account')

        const headers = getHeaders(this.configService)

        const url = `${this.configService.get('baseurl')}/deposits`
        // const url1 = this.configService.get('url3')
        // console.log({url1, url});
        
        const {createDepositDto} = command;

        const deposit = await this.axioss.post(
            url,
            headers,
            createDepositDto
        )

        return deposit
    }
}