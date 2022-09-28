import { IsOptional } from "class-validator";

export class InterestPaymentDate {
    
    @IsOptional()
    day:   number;
    
    @IsOptional()
    month: number;
}