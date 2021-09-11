import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiClass } from '../models/ApiClass.class';
import { IProfessional } from '../models/professional.interfase';

@Injectable({
  providedIn: 'root'
})

export class ProfessionalsService {

  base_url = environment.base_url;

  constructor( private http: HttpClient ){}

   /**
   * Get all Professionals from Api
   */
  getProfessionals(){

    const url = this.base_url+'/professionals';
    return this.http.get(url)
                .pipe(
                  map( resp => <IProfessional[]>resp)
                )
  }

}
