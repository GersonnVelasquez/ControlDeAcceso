import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _login = false;
  public UsuarioActual;

  constructor(public router: Router, private http: HttpClient, private Message: ToastrService) { }

  apiRoot = 'http://localhost:57384/';

  public  isLogin(): boolean {
    return this._login;
  }

  public login (User: string, Pass: string) {
    const apiURL = `${this.apiRoot}api/Login/${User}/${Pass}`;
    // this._login = true;
    this.http.get(apiURL).subscribe((data: any) => {
      if (data === false) {
        this._login = data;
        this.Message.error('Credenciales Invalidas', 'Error');
      } else {
        this._login = true;
        this.UsuarioActual = data;
        this.router.navigate(['/inicio']);
      }
    });
  }

  public logout(): void {
    this._login = false;
    this.router.navigate(['/login']);
  }
}
