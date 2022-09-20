import { PaginationDto } from '../../../common/dto/pagination.dto';

export class GetClientsQuery {

    constructor(
        public readonly paginationDto: PaginationDto
    ){}
}

//el manejar mediante el patron observer el manejador va a estar escuchando 