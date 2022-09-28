import { IsOptional } from "class-validator";

export class OverdraftSettings {
    
    @IsOptional()
    allowOverdraft:      boolean;
    
    @IsOptional()
    overdraftExpiryDate: string;
    
    @IsOptional()
    overdraftLimit:      number;
}