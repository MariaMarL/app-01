import { IsOptional } from "class-validator";
import { InterestPaymentSettings } from "./InterestPaymentSettings";
import { InterestRateSettings } from "./InterestRateSettings";

export class InterestSettings {
    
    @IsOptional()
    interestPaymentSettings: InterestPaymentSettings;
    
    @IsOptional()
    interestRateSettings:    InterestRateSettings;
}