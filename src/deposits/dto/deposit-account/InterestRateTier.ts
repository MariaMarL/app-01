import { IsOptional } from "class-validator";

export class InterestRateTier {
    
    @IsOptional()
    endingBalance: number;
    
    @IsOptional()
    endingDay:     number;
    
    @IsOptional()
    interestRate:  number;
}