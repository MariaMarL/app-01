import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Attachment } from "./attachment.dto";

export class IDDocument {
    
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    attachments:                       Attachment[];
    
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    clientKey:                         string;
    
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    documentId:                        string;
    
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    documentType:                      string;
    
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    encodedKey:                        string;
    
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    identificationDocumentTemplateKey: string;
    
    @IsNumber()
    @IsOptional()
    @IsNotEmpty()
    indexInList:                       number;
    
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    issuingAuthority:                  string;
    
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    validUntil:                        string;
}