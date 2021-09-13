import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { IProfessional } from './professional.interfase';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
/**
 * Class to get data from Api
 */
export class ApiClass {

    public url = environment.base_url;
    public production = environment.production;
    public professionals: IProfessional[] = [];

    constructor( protected http: HttpClient){
        //console.log('apiclass', this.http);
    }

    error(error: HttpErrorResponse){
        let errorMessage = '';
        if(error.error instanceof ErrorEvent){
            errorMessage = error.error.message;
        }else{
            errorMessage = `Error Code: ${ error.status }\nMessage: ${error.message}`;
        }
        return of({ error: true, msg: errorMessage, data: this.professionals });
    }
}