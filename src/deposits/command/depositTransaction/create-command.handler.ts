import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AxiosAdapter } from '../../../common/adapters/axios.adapter';
import { ConfigService } from '@nestjs/config';
import { CreateDepositTransactionCommand } from './create-depositTransaction.command';
import { Logger } from '@nestjs/common';
import { getHeaders } from '../../../common/helpers/headers.helper';

@CommandHandler(CreateDepositTransactionCommand)
export class CreateDepositTransactionHandler implements ICommandHandler{
    
    constructor(
        private readonly axioss: AxiosAdapter,
        private readonly configService: ConfigService
    ){}

    async execute(command: CreateDepositTransactionCommand): Promise<any> {
        
        const logger = new Logger( CreateDepositTransactionHandler.name)
        
        const headers = getHeaders(this.configService)
        
        const {createDepositTransactionDto, depositAccountId} = command
        
        logger.log(`Making a deposit to ${depositAccountId}`)

        const url = `${this.configService.get('baseurl')}/deposits/${depositAccountId}/deposit-transactions`
    
        const depositTransaction = await this.axioss.post(
            url,
            headers,
            createDepositTransactionDto
        )

        return depositTransaction
    }
}