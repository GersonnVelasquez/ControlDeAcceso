import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _login = false;

  constructor(public router: Router, private http: HttpClient) { }

  apiRoot = 'http://localhost:57384/';

  public  isLogin(): boolean {
    return this._login;
  }

  public login (User: string, Pass: string) {
    const apiURL = `${this.apiRoot}api/Login/${User}/${Pass}`;
    this._login = true;
    this.router.navigate(['/inicio']);
    // this.http.get(apiURL).subscribe(data => {
    //   this._login = data;
    // });
  }

  public logout(): void {
    this._login = false;
    this.router.navigate(['/login']);
  }
}
