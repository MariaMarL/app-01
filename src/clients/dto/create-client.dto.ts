import { IsArray, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Min, MinLength, ValidateNested } from "class-validator";
import { Gender, PreferredLanguage, State } from "../enums";
import { Address, IDDocument, Personalizados, Pep } from "./";


export class CreateClientDto {
    
    
    @IsString()
    @IsOptional()
    encodedKey:        string;
    
    @IsString()
    @IsOptional()
    id:                string;

    @IsString()
    @IsOptional()
    _PEP:              Pep;
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    activationDate:    string;
    
    @IsOptional()
    @IsArray()
    @ValidateNested()
    addresses:         Address[];
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    approvedDate:      string;
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    birthDate:         string;
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    clientRoleKey:     string;
    
    @IsString()
    @IsOptional()
    creationDate:      string;
    
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    emailAddress:      string;
    
    @IsString()
    @MinLength(3)
    firstName:         string;
    
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    @IsEnum(Gender)
    gender:            string;
    
    @IsArray()
    @IsOptional()
    @IsString({each:true})
    groupKeys:         string[];
    
    @IsInt()
    @IsOptional()
    @IsNotEmpty()
    groupLoanCycle:    number;
    
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    homePhone:         string;
    
    @IsString()
    @IsOptional()
    @ValidateNested()
    idDocuments:       IDDocument[];
    
    @IsString()
    @IsOptional()
    lastModifiedDate:  string;
    
    @IsString()
    @IsOptional()
    @MinLength(3)
    middleName:        string;
    
    @IsString()
    @IsOptional()
    @MinLength(3)
    lastName:          string;
    
    @IsInt()
    @IsOptional()
    @IsNotEmpty()
    loanCycle:         number;
    
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    mobilePhone:       string;
    
    @IsString()
    @IsOptional()
    notes:             string;
    
    @IsString()
    @IsOptional()
    @IsEnum(PreferredLanguage)
    preferredLanguage: string;
    
    @IsString()
    @IsOptional()
    @IsEnum(State)
    state:             string;
    
    @IsString()
    @IsOptional()
    @ValidateNested()
    _personalizados: Personalizados;

}
