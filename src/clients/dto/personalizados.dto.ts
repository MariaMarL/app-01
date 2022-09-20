import { IsUUID, IsNotEmpty } from "class-validator";

export class Personalizados{

    @IsUUID()
    @IsNotEmpty()
    External_ID: string;
}