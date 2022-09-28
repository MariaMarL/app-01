import { IsOptional } from "class-validator";
import { TransferDetails } from "./TransferDetails.dto";

export class CreateTransferDto{
    
    @IsOptional()
    amount:          number;
    
    @IsOptional()
    externalId:      string;
    
    @IsOptional()
    notes:           string;
    
    @IsOptional()
    paymentOrderId:  string;
    
    @IsOptional()
    transferDetails: TransferDetails;
    
    @IsOptional()
    valueDate:       string;
}