import { IsDate, IsNumber, IsString } from "class-validator";

export class Attachment {

    
    @IsString()
    creationDate:     string;

    @IsString()
    encodedKey:       string;

    @IsString()
    fileName:         string;

    @IsString()
    lastModifiedDate: string;

    @IsString()
    location:         string;

    @IsString()
    name:             string;

    @IsString()
    notes:            string;

    @IsString()
    ownerKey:         string;

    @IsString()
    ownerType:        string;

    @IsString()
    type:             string;

    @IsNumber()
    fileSize:         number;

    @IsNumber()
    id:               number;
}