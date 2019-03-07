import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VisitasService {

  apiRoot = 'http://localhost:57384/';

  constructor(private http: HttpClient) { }

  public addVisita(Visita: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    const apiURL = `${this.apiRoot}api/Visita/insert/`;
    return this.http.post(apiURL, Visita, { headers: headers });
  }

}
