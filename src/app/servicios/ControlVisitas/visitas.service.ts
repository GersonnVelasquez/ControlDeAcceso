import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StaticVar } from 'src/app/VaribalesEstaticas';


@Injectable({
  providedIn: 'root'
})
export class VisitasService {

  apiRoot = StaticVar.Servidor;

  constructor(private http: HttpClient) { }

  public addVisita(Visita: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    const apiURL = `${this.apiRoot}api/Visita/insert/`;
    return this.http.post(apiURL, Visita, { headers: headers });
  }

  public UpdateVisita(Visita: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    const apiURL = `${this.apiRoot}api/Visita/UpdateInfo/`;
    return this.http.post(apiURL, Visita, { headers: headers });
  }

  public GetVisitasbyEmpresa(id): Observable<any> {
    const apiURL = `${this.apiRoot}api/Visita/select/empresaId/${id}`;
    return this.http.get(apiURL);
  }

  public GetVisitasDetalle(idvisita): Observable<any> {
    const apiURL = `${this.apiRoot}api/Visita_Detalle/select/idVisita/${idvisita}`;
    return this.http.get(apiURL);
  }

  public DeleteVisita(idvisita): Observable<any> {
    const apiURL = `${this.apiRoot}api/Visita/delete/${idvisita}`;
    return this.http.delete(apiURL);
  }

  public AddAdjunto(Adjunto: any) {
    const apiURL = `${this.apiRoot}api/Visita/Adjunto/`;
    this.http.post(apiURL, Adjunto).subscribe();
     }

  public Adjunto(Adjunto: any) {
    const apiURL = `${this.apiRoot}api/Visita_Detalle/Adjunto/`;
    this.http.post(apiURL, Adjunto).subscribe();
     }
}
