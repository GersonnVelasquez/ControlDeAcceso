import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StaticVar } from 'src/app/VaribalesEstaticas';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  apiRoot = StaticVar.Servidor;

  constructor(private http: HttpClient) { }

  public GetUsuarios(): Observable<any> {
    const apiURL = `${this.apiRoot}api/Usuarios/select/`;
    return this.http.get(apiURL);
  }

  public AddUsuario(Usuario: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    const apiURL = `${this.apiRoot}api/Usuarios/insert/`;
    return this.http.post(apiURL, Usuario, {headers: headers});
  }

  public DeleteUsuario(Usuario): Observable<any> {
    const apiURL = `${this.apiRoot}api/Usuarios/delete/${Usuario.id_usuario}`;
    return this.http.delete(apiURL);
  }

}
