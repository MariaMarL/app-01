import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PaginationDto } from '../dto/pagination.dto';
import { HttpAdapter } from '../interfaces/http-adapter.interfaces';

@Injectable()
export class AxiosAdapter implements HttpAdapter {

    private readonly logger = new Logger('AxiosAdapter')
    private axioss: AxiosInstance = axios;

    async get<T>(url: string, apikey: string, paginationDto: PaginationDto): Promise<T> {

        const {limit=50, offset=0, paginationDetails='OFF', detailsLevel='BASIC'} = paginationDto;

        try {
            
            const {data} = await this.axioss.get<T>(url, {
                headers: {
                    'apikey': apikey,
                }, 
                params: {
                    'offset': offset,
                    'paginationDetails': paginationDetails,
                    'detailsLevel': detailsLevel,
                    'limit': limit,
                }
            })
            return data;

        } catch (error) {
            this.logger.error(error);
            throw new InternalServerErrorException('Something went wrong, check logs')
            
        }
    }

    async post<T>(url: string, headers:any, infToCreate: any): Promise<T> {

        try {
            const {data} = await this.axioss.post<T>(url, infToCreate, {
                headers:headers
            })
            return data

        } catch (error) {
            this.logger.error(error)
            // console.log(error);
            
            throw new InternalServerErrorException('Unexpected error, check Logs');
        }
    }



}