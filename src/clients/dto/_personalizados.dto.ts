import { IsUUID, IsNotEmpty } from "class-validator";

export class _Personalizados{

    @IsUUID()
    @IsNotEmpty()
    External_ID: string;
}