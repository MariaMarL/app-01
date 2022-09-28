import { IsOptional } from "class-validator";
import { InterestRateTier } from "./InterestRateTier";

export class InterestRateSettings {
    
    @IsOptional()
    interestChargeFrequency:      string;
    
    @IsOptional()
    interestChargeFrequencyCount: number;
    
    @IsOptional()
    interestRate:                 number;
    
    @IsOptional()
    interestRateReviewCount:      number;
    
    @IsOptional()
    interestRateReviewUnit:       string;
    
    @IsOptional()
    interestRateTerms:            string;
    
    @IsOptional()
    interestRateTiers:            InterestRateTier[];
    
    @IsOptional()
    interestSpread:               number;
}