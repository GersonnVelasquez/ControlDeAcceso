import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private login: LoginService) {

  }

  ngOnInit() {
  }

  Logout(): void {
    this.login.logout();
  }
}
