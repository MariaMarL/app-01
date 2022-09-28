import { IsOptional } from "class-validator";
import { InterestPaymentDate } from "./InterestPaymentDate";

export class InterestPaymentSettings {
    
    @IsOptional()
    interestPaymentDates: InterestPaymentDate[];
    
    @IsOptional()
    interestPaymentPoint: string;
}