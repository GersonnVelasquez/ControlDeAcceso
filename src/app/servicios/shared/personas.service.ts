import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StaticVar } from 'src/app/VaribalesEstaticas';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  apiRoot = StaticVar.Servidor;

  constructor(private http: HttpClient) { }

  getPersonas() {
    const apiURL = `${this.apiRoot}api/Persona/select/`;
    return this.http.get(apiURL);
  }

  addPersona(Persona) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    const apiURL = `${this.apiRoot}api/Persona/insert/`;
    return this.http.post(apiURL, Persona, {headers: headers});
  }

}
