import { IsOptional, IsNumber, Min, IsEnum } from "class-validator";
import { PaginationDetails } from "./enum/PaginationDetails.enum";
import { DetailsLevel } from './enum/DetailsLevel.enum';

export class PaginationDto {
    
    @IsOptional()
    @IsNumber()
    @Min(0)
    offset?: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    limit?: number;

    @IsOptional()
    @IsEnum(PaginationDetails)
    paginationDetails?: string;

    @IsOptional()
    @IsEnum(DetailsLevel)
    detailsLevel?: string;
}