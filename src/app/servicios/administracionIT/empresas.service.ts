import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StaticVar } from 'src/app/VaribalesEstaticas';


@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  apiRoot = StaticVar.Servidor;

  constructor(private http: HttpClient) {
  }

  public GetEmpresas(): Observable<any> {
    const apiURL = `${this.apiRoot}api/Empresas/select/`;
    return this.http.get(apiURL);
  }

  public AddEmpresas(Empresa: any): Observable<any> {

    // const formData = new FormData();
    // formData.append('file', Empresa.logo);

    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    // const apiURLLogo = `${this.apiRoot}api/Empresas/insert/logo/`;
    // this.http.post(apiURLLogo, formData);

    const apiURL = `${this.apiRoot}api/Empresas/insert/`;
    return this.http.post(apiURL, Empresa);
  }

  public DeleteEmpresas(Empresa): Observable<any> {
    const apiURL = `${this.apiRoot}api/Empresas/delete/${Empresa.id_empresa}`;
    return this.http.delete(apiURL);
  }


}
