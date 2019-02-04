import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _login = false;

  constructor(public router: Router) { }

  public  isLogin(): boolean {
    return this._login;
  }

  public login(): void {
    this._login = true;
    this.router.navigate(['/inicio']);
  }

  public logout(): void {
    this._login = false;
    this.router.navigate(['/login']);
  }
}
