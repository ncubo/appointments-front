import { City } from './city.model';
import { Service } from './service.model';

export class Professional {
    constructor (
        public id: number,
        public first_name: string,
        public last_name: string,
        public city: City,
        public avatar: string,
        public servicios: Service,
       // public evaluacion: 
    ){}
}