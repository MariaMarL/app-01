import { IsOptional, IsString } from "class-validator";

export  class createDepositTransactionDto {
    
    
    @IsOptional()
    amount:                           number;
    
    @IsOptional()
    bookingDate:                      string;
    
    @IsOptional()
    externalId:                       string;
    
    @IsOptional()
    holdExternalReferenceId:          string;
    
    @IsOptional()
    notes:                            string;
    
    @IsOptional()
    paymentOrderId:                   string;
    
    @IsOptional()
    skipMaximumBalanceValidation:     boolean;
    
    @IsOptional()
    transactionDetails:               any;
    
    @IsOptional()
    valueDate:                        string;

    @IsString()
    depositAccountId:                 string; 
}