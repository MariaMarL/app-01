import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ConfigService } from '@nestjs/config';
import { AxiosAdapter } from '../../../common/adapters/axios.adapter';
import { CreateLoanCommand } from './create-loan.command';
import { Logger } from '@nestjs/common';
import { getHeaders } from '../../../common/helpers/headers.helper';
import {LoanResponse} from '../../interfaces/loan-response.interface'

@CommandHandler(CreateLoanCommand)
export class CreateLoanHandler implements ICommandHandler{

    constructor(
        private readonly axioss: AxiosAdapter,
        private readonly configService: ConfigService
    ){}


    async execute(command: CreateLoanCommand): Promise<any> {
        
        const logger = new Logger(CreateLoanHandler.name)
        logger.log('Creating a new Loan')

        const headers = getHeaders(this.configService)
        
        const url = this.configService.get('url2')
        
        const {createLoanDto} = command;
        // console.log({headers});
        // console.log({url});
        // console.log({createLoanDto});

        const loan = await this.axioss.post(
            url,
            headers,
            createLoanDto
        )

        return loan
        
    }
}