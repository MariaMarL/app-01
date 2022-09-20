import { IsInt, IsLatitude, IsLongitude, IsNumber, IsOptional, IsString, Max, Min, MinLength } from "class-validator";

export class Address {
    
    @IsOptional()
    @IsString()
    encodedKey?:  string;
    
    @IsOptional()
    @IsString()
    parentKey?:   string;

    @IsOptional()
    @IsString()
    @MinLength(3)
    city?:        string;

    @IsOptional()
    @IsString()
    @MinLength(3)
    country?:     string;

    @IsOptional()
    @IsNumber()
    @IsInt()
    indexInList?: number;
    
    @IsOptional()
    @IsString()
    line1?:       string;
    
    @IsOptional()
    @IsString()
    line2?:       string;

    @IsOptional()
    @IsString()
    @IsLatitude()
    @Min(-90)
    @Max(90)
    latitude?:    number;
    
    @IsOptional()
    @IsString()
    @IsLongitude()
    @Min(-180)
    @Max(180)
    longitude?:   number;

    @IsOptional()
    @IsString()
    postcode?:    string;

    @IsOptional()
    @IsString()
    region?:      string;


}