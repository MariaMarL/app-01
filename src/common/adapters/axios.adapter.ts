import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PaginationDto } from '../dto/pagination.dto';
import { HttpAdapter } from '../interfaces/http-adapter.interfaces';
import { CreateClientDto } from '../../clients/dto/create-client.dto';

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
                    'accept': `application/vnd.mambu.v2+json`
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
            // console.log(error);
            throw new InternalServerErrorException('Something went wrong, check logs')
            
        }
    }

    async post<T>(url: string, apikey: string, idempotencyKey: string, createClientDto: CreateClientDto): Promise<T> {

        try {
            const {data} = await this.axioss.post<T>(url, createClientDto, {
                headers:{
                    'apiKey': apikey,
                    'idempotencyKey': idempotencyKey,
                    'accept': 'application/vnd.mambu.v2+json'
                }
            })
            return data

        } catch (error) {
            this.logger.error('error')
            console.log(error);
            throw new InternalServerErrorException('Unexpected error, check Logs');
        }
    }



}