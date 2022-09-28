import { IsOptional } from "class-validator";

export class InternalControls {
    
    @IsOptional()
    maxDepositBalance:        number;
    
    @IsOptional()
    maxWithdrawalAmount:      number;
    
    @IsOptional()
    recommendedDepositAmount: number;
    
    @IsOptional()
    targetAmount:             number;
}