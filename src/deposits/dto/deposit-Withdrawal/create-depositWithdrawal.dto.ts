import { IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateDepositWithdrawalDto{
    
    @IsOptional()
    @IsNumber()
    @Min(1)
    amount:                           number;
    
    @IsString()
    @IsOptional()
    bookingDate:                      string;

    @IsString()
    @IsOptional()
    externalId:                       string;
    
    @IsString()
    @IsOptional()
    holdExternalReferenceId:          string;
    
    @IsString()
    @IsOptional()
    notes:                            string;
    
    @IsString()
    @IsOptional()
    paymentOrderId:                   string;
    
    @IsOptional()
    transactionDetails:               any;
    
    @IsOptional()
    valueDate:                        string;
}