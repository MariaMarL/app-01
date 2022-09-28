import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { AxiosAdapter } from '../../../common/adapters/axios.adapter';
import { ConfigService } from '@nestjs/config';
import { CreateDepositWithDrawalCommand } from './create-depositWithdrawal.command';
import { Logger } from '@nestjs/common';
import { getHeaders } from '../../../common/helpers/headers.helper';

@CommandHandler(CreateDepositWithDrawalCommand)
export class CreateDepositWithdrawalHandler implements ICommandHandler{

    constructor(
         private readonly axioss: AxiosAdapter,
         private readonly configService: ConfigService
    ){}

    async execute(command: CreateDepositWithDrawalCommand): Promise<any> {
        console.log('inicio handler');
        
        const logger = new Logger(CreateDepositWithdrawalHandler.name)

        const headers = getHeaders(this.configService)

        const {createDepositWithDrawalDto, depositAccountId} = command
        
        logger.log(`Making a withdrawal from ${depositAccountId} account`)
    
        const url = `${this.configService.get('baseurl')}/deposits/${depositAccountId}/withdrawal-transactions`
        console.log(url);
        
        const depositWithdrawal = await this.axioss.post(
            url,
            headers,
            createDepositWithDrawalDto
        )

        return depositWithdrawal
    }
}