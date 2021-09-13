import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
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
                );
  }

  /**
   * Get all Professionals from Api
   */
   getProfessionalsById(id: number){

    const url = `${this.base_url}/professionals/${id}`;
    return this.http.get(url)
                .pipe(
                  map( resp => <IProfessional>resp)
                );
  }

  /**
   * Add New Professional
   */
  insertNewProfessional(newProf: IProfessional){
    const url = this.base_url+'/professionals';
    return this.http.post(url,newProf);
  }

  /**
   * Search Professional by all properties
   */
   searchProfessional(text: string){
    const url = `${this.base_url}/professionals?q=${text}`;
    console.log('searchProfessional',text);
    return this.http.get(url)
                  .pipe(
                    map( resp => <IProfessional[]>resp)
                  );
  }

}
