import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  apiRoot = 'http://localhost:57384/';

  constructor(private http: HttpClient) { }

  getEmpresas() {
    const apiURL = `${this.apiRoot}api/Empresas/select/`;
    return this.http.get(apiURL);
  }


}
