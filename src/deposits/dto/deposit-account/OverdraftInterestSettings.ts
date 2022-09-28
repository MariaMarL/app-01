import { IsOptional } from "class-validator";
import { InterestRateSettings } from "../deposit_response";

export class OverdraftInterestSettings {
    
    @IsOptional()
    interestRateSettings: InterestRateSettings;
}