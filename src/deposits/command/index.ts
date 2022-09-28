import { CreateDepositHandler } from "../command/depositAccount/create-command.handler";
import { CreateDepositTransactionHandler } from './depositTransaction/create-command.handler';
import { CreateDepositWithdrawalHandler } from './depositWithdrawal/create-command.handler';
import { CreateTransferHandler } from './transfer/create-command.handler';

export const depositsCommandHandlers = [
    CreateDepositHandler, 
    CreateDepositTransactionHandler, 
    CreateDepositWithdrawalHandler,
    CreateTransferHandler
]