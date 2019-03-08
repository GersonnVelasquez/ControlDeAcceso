import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  apiRoot = 'http://localhost:57384/';

  constructor(private http: HttpClient) { }

  public GetEmpresas(): Observable<any> {
    const apiURL = `${this.apiRoot}api/Empresas/select/`;
    return this.http.get(apiURL);
  }

  public AddEmpresas(Empresa: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    const apiURL = `${this.apiRoot}api/Empresas/insert/`;
    return this.http.post(apiURL, Empresa, {headers: headers});
  }

  public DeleteEmpresas(Empresa): Observable<any> {
    const apiURL = `${this.apiRoot}api/Empresas/delete/${Empresa.id_empresa}`;
    return this.http.delete(apiURL);
  }


}
