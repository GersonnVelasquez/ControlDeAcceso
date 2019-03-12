import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { VisitasService } from 'src/app/servicios/ControlVisitas/visitas.service';
import { LoginService } from 'src/app/servicios/shared/login.service';
import { ObjetosService } from 'src/app/servicios/ControlVisitas/objetos.service';

@Component({
  selector: 'app-visitasdash',
  templateUrl: './visitasdash.component.html',
  styleUrls: ['./visitasdash.component.css']
})
export class VisitasdashComponent implements OnChanges {


  @Input() EmpresaId = null;
  @Input() isAdmin = false;
  @Input() isSecurityUser = false;
  @Output() UpdateVisit = new EventEmitter();

  Visitas = [];
  Personas = [];
  Objetos = [];

  constructor(private visitas: VisitasService, private login: LoginService, private objetos: ObjetosService) {
  }

  ngOnChanges() {
    if (this.EmpresaId !== undefined) {
      this.EmpresaId = this.EmpresaId === null ? this.login.UsuarioActual.id_empresa : this.EmpresaId;
      this.getVisitasbyEmpresas();
    }

  }

  getVisitasbyEmpresas() {
    this.visitas.GetVisitasbyEmpresa(this.EmpresaId).subscribe(
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

  updateVisit(visita) {
      this.UpdateVisit.emit(visita);
  }

}
