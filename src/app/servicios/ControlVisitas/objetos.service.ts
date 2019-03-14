import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StaticVar } from 'src/app/VaribalesEstaticas';

@Injectable({
  providedIn: 'root'
})
export class ObjetosService {

  apiRoot = StaticVar.Servidor;

  constructor(private http: HttpClient) { }

  public GetObjeotosbyVisita(idvisita): Observable<any> {
    const apiURL = `${this.apiRoot}api/Objeto/select/idVisita/${idvisita}`;
    return this.http.get(apiURL);
  }
}
