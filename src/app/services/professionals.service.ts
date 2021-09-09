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
export class ProfessionalsService {

  /**
   * Get all Professionals from Api
   */
  // getProfessionals(): Observable<{error: boolean, msg: string, data: IProfessional[]}>{
  //   const professionals: IProfessional[] = [];
  //   const response = {error: false, msg: '', data: professionals};
  //   console.log(this.url+'/professionals');
  //   const url = this.url+'/professionals';
  //   // <IProfessional[]>
  //   // return this.http.get(url)
  //   //           .pipe(
  //   //             map( res => {
  //   //               console.log('response getProfessionals', res);
  //   //               response.data = res;
  //   //               return response;
  //   //             }),
  //   //             // catchError(err => {
  //   //             //   console.log('err',err);
  //   //             //   throw 'error in source. Details: ' + err;
          
  //   //             // }),
  //   //             catchError(this.error)
  //   //           );             

  // }


  // getProfessionals(){
  //   const url = `${this.url}/professionals`;
  //   console.log('urllll',url);
  //   console.log('this',this);
  //   return this.http.get('http://localhost:3000/professionals');
  // }



  constructor(private http: HttpClient){
    console.log('this.http:',this.http);
  }

  getProfessionals(){
    const url = `${environment.base_url}/professionals`;
    return this.http.get(url);
  }

}
