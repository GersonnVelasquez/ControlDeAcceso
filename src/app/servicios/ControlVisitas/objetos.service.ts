import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjetosService {

  apiRoot = 'http://localhost:57384/';

  constructor(private http: HttpClient) { }

  public GetObjeotosbyVisita(idvisita): Observable<any> {
    const apiURL = `${this.apiRoot}api/Objeto/select/idVisita/${idvisita}`;
    return this.http.get(apiURL);
  }
}
