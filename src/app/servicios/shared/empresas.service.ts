import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StaticVar } from 'src/app/VaribalesEstaticas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  apiRoot = StaticVar.Servidor;

  constructor(private http: HttpClient) { }

  getEmpresas() {
    const apiURL = `${this.apiRoot}api/Empresas/select/`;
    return this.http.get(apiURL);
  }


}
