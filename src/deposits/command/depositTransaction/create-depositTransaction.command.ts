import { createDepositTransactionDto } from '../../dto/deposit-transaction/create-depositTransaction.dto';


export class CreateDepositTransactionCommand {

    constructor(
        public readonly createDepositTransactionDto: createDepositTransactionDto,
        public readonly depositAccountId: string
    ){}
}