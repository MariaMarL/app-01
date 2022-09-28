import { CreateTransferDto } from '../../dto/transfer/create-transfer.dto';


export class CreateTransferCommand {

    constructor(
        public readonly createTransferDto: CreateTransferDto,
        public readonly depositAccountId: String 
    ){}
}