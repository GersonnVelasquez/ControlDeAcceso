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

  constructor(public router: Router, private http: HttpClient, private Message: ToastrService) { }

  apiRoot = 'http://localhost:57384/';

  public  isLogin(): boolean {
    return this._login;
  }

  public login (User: string, Pass: string) {
    const apiURL = `${this.apiRoot}api/Login/${User}/${Pass}`;
    // this._login = true;
    this.http.get(apiURL).subscribe((data: boolean) => {
      if (data === true) {
        this._login = data;
        this.router.navigate(['/inicio']);
      } else {
        this._login = false;
        this.Message.error('Credenciales Invalidas', 'Error');
      }

    });
  }

  public logout(): void {
    this._login = false;
    this.router.navigate(['/login']);
  }
}
