import { Injectable } from '@angular/core';
import {CanActivate } from '@angular/router';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuadService implements CanActivate {

  constructor(private login: LoginService) { }

  canActivate() {
    if (this.login.isLogin()) {
      return true;
    } else {
      return false;
    }
  }
}
