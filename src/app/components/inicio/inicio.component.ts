import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/shared/login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  profile: any;

  constructor(private login: LoginService) {
    this.profile = login.UsuarioActual;
  }

  ngOnInit() {
  }
}
