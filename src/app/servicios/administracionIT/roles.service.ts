import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StaticVar } from 'src/app/VaribalesEstaticas';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  apiRoot = StaticVar.Servidor;

  constructor(private http: HttpClient) { }

  public GetRoles(): Observable<any> {
    const apiURL = `${this.apiRoot}api/Roles/select/`;
    return this.http.get(apiURL);
  }

  public AddRol(Rol: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    const apiURL = `${this.apiRoot}api/Roles/insert/`;
    return this.http.post(apiURL, Rol, {headers: headers});
  }

  public DeleteRol(Rol): Observable<any> {
    const apiURL = `${this.apiRoot}api/Roles/delete/${Rol.id_rol}`;
    return this.http.delete(apiURL);
  }


}

