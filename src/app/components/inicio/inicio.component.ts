import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  profile: any;

  constructor(public router: Router, private login: LoginService) {
    this.profile = login.UsuarioActual;
  }

  ngOnInit() {
  }

  public CrearVisita(): void {
    this.router.navigate(['/crearvisita']);
   }

   public VerVisita(): void {
    this.router.navigate(['/consultavisitas']);
   }

   public ControlVisita(): void {
    this.router.navigate(['/controlIngresos']);
   }

   public Usuarios(): void {
    this.router.navigate(['/usuarios']);
   }
   public Empresas(): void {
    this.router.navigate(['/empresas']);
   }
   public Roles(): void {
    this.router.navigate(['/roles']);
   }
}
