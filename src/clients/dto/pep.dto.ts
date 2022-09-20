import { IsOptional, IsString } from "class-validator";

export class Pep {
    
    @IsString()
    @IsOptional()
    IS_PEP: string;
}