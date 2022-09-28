import { CreateDepositDto } from "../dto/deposit-account/create-deposit.dto";

export class CreateDepositComamnd {

    constructor(
        public readonly createDepositDto: CreateDepositDto
    ){}
}