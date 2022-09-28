import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AxiosAdapter } from '../../../common/adapters/axios.adapter';
import { ConfigService } from '@nestjs/config';
import { CreateTransferCommand } from './create-transfer.command';
import { Logger } from '@nestjs/common';
import { getHeaders } from '../../../common/helpers/headers.helper';

@CommandHandler(CreateTransferCommand)
export class CreateTransferHandler implements ICommandHandler{

    constructor(
        private readonly axioss: AxiosAdapter,
        private readonly configService: ConfigService
    ){}

    async execute(command: CreateTransferCommand): Promise<any> {
        
        const logger = new Logger(CreateTransferHandler.name)
        const headers = getHeaders(this.configService)

        const {createTransferDto, depositAccountId} = command
        logger.log(`Making a transfer to ${depositAccountId} account`)

        const url = `${this.configService.get('baseurl')}/deposits/${depositAccountId}/transfer-transactions`

        const transfer = await this.axioss.post(
            url,
            headers,
            createTransferDto
        )

        return transfer;
    }
}