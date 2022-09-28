import { CreateDepositWithdrawalDto } from '../../dto/deposit-Withdrawal/create-depositWithdrawal.dto';


export class CreateDepositWithDrawalCommand{

    constructor(
        public readonly createDepositWithDrawalDto: CreateDepositWithdrawalDto,
        public readonly depositAccountId: string
    ){}
}