import { CreateClientDto } from "../../clients/dto/create-client.dto";
import { PaginationDto } from "../dto/pagination.dto";

export interface HttpAdapter {

    get<T>(url:string, apikey:string, paginationDto: PaginationDto) : Promise<T>
    post<T>(url:string, header:any, createClientDto: CreateClientDto) : Promise<T>
    
}