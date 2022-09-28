import { IsOptional } from "class-validator";
import { InterestSettings } from "./InterestSettings";
import { InternalControls } from "./InternalControls";
import { OverdraftInterestSettings } from "./OverdraftInterestSettings";
import { OverdraftSettings } from "./OverdraftSettings";

export class CreateDepositDto {

    
    @IsOptional()
    accountHolderKey:          string;
    
    @IsOptional()
    accountHolderType:         string;
    
    @IsOptional()
    accountType:               string;
    
    @IsOptional()
    assignedBranchKey:         string;
    
    @IsOptional()
    assignedCentreKey:         string;
    
    @IsOptional()
    assignedUserKey:           string;
    
    @IsOptional()
    creditArrangementKey:      string;
    
    @IsOptional()
    currencyCode:              string;
    
    @IsOptional()
    id:                        string;
    
    @IsOptional()
    interestSettings:          InterestSettings;
    
    @IsOptional()
    internalControls:          InternalControls;
    
    @IsOptional()
    name:                      string;
    
    @IsOptional()
    notes:                     string;
    
    @IsOptional()
    overdraftInterestSettings: OverdraftInterestSettings;
    
    @IsOptional()
    overdraftSettings:         OverdraftSettings;
    
    @IsOptional()
    productTypeKey:            string;
    
    @IsOptional()
    withholdingTaxSourceKey:   string;
}
