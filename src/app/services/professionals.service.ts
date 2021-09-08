import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ProfessionalsService {

  constructor(private http: HttpClient) { }

  getProfessionals(){
    const url = `${base_url}/professionals`;
    return this.http.get(url);
  }


}
