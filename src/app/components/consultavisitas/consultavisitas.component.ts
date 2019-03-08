import { Component, OnInit } from '@angular/core';
import { VisitasService } from 'src/app/servicios/ControlVisitas/visitas.service';
import { LoginService } from 'src/app/servicios/shared/login.service';
import { ObjetosService } from 'src/app/servicios/ControlVisitas/objetos.service';

@Component({
  selector: 'app-consultavisitas',
  templateUrl: './consultavisitas.component.html',
  styleUrls: ['./consultavisitas.component.css']
})
export class ConsultavisitasComponent implements OnInit {

  Visitas = [];
  Personas = [];
  Objetos = [];

  constructor(private visitas: VisitasService, private login: LoginService, private objetos: ObjetosService) {
    this.getVisitasbyEmpresas();
   }

  ngOnInit() {
  }

  getVisitasbyEmpresas() {
    this.visitas.GetVisitasbyEmpresa(this.login.UsuarioActual.id_empresa).subscribe(
      data => {
        this.Visitas = data;
      });
  }

  verPersonas(idvisita) {
    this.visitas.GetVisitasDetalle(idvisita).subscribe(
      data => {
        this.Personas = data;
      });
  }

  verObjetos(idvisita) {
    this.objetos.GetObjeotosbyVisita(idvisita).subscribe(
      data => {
        this.Objetos = data;
      });
  }

  EliminarVisita(idvisita): void {
    this.visitas.DeleteVisita(idvisita).subscribe(
      _ => {
      },
      _error => {
        alert('Error');
      },
      () => {
        this.getVisitasbyEmpresas();
      }
    );
  }

}
