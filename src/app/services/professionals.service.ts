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
// extends ApiClass
export class ProfessionalsService extends ApiClass{

  /**
   * Get all Professionals from Api
   */
  getProfessionals(): Observable<{error: boolean, msg: string, data: IProfessional[]}>{
    const professionals: IProfessional[] = [];
    const response: any = {error: false, msg: '', data: professionals};
    const url = this.url+'/professionals';
    return this.http.get<IProfessional[]>(url)
              .pipe(
                map( res => {
                  console.log('response getProfessionals', res);
                  response.data = res;
                  return response;
                }),
                catchError(this.error)
              );             

  }

}
