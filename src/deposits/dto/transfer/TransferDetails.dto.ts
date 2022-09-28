import { IsOptional, IsString } from "class-validator";

export class TransferDetails{

    
    @IsOptional()
    @IsString()
    linkedAccountId:   string;
    
    @IsOptional()
    @IsString()
    linkedAccountKey:  string;
    
    @IsOptional()
    @IsString()
    linkedAccountType: string;
}