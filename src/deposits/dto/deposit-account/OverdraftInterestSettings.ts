import { IsOptional } from "class-validator";
import { InterestRateSettings } from "./InterestRateSettings";

export class OverdraftInterestSettings {
    
    @IsOptional()
    interestRateSettings: InterestRateSettings;
}