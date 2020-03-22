import { Component, OnInit, Input } from '@angular/core';
import { EmpresasService } from 'src/app/servicios/shared/empresas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/Modelos/Empresa';

@Component({
  selector: 'app-controlingresos',
  templateUrl: './controlingresos.component.html',
  styleUrls: ['./controlingresos.component.css']
})
export class ControlingresosComponent implements OnInit {

  Empresa = new Empresa();
  EmpresaSelected = false;
  EmpresasData = [];
  UpdatingVisit = false;
  Visita;
  @Input() ImgCol = [];
  @Input() Data = [];

  constructor(private empresas: EmpresasService, private router: Router, private route: ActivatedRoute) {
    this.getEmpresas();
  }

  ngOnInit() {
     }

  getEmpresas() {
    this.empresas.getEmpresas().subscribe(
      (data: any) => {
        this.EmpresasData = data;
      });
  }
  SetImage(image) {
    if (image != null) {
      return  'data:image/gif;base64,' + image._buffer;
    }
    return 'assets/img/na.jpg';
  }

  ConsultarEmpresa(empresa) {
    this.Empresa = empresa;
    this.EmpresaSelected = true;
  }

  CambiarEmpresa() {
    this.EmpresaSelected = false;
  }

  updateVisita(visita) {
    this.Visita = visita;
    this.UpdatingVisit = true;
    this.EmpresaSelected = false;
  }

  Cancelar() {
    this.UpdatingVisit = false;
    this.EmpresaSelected = true;
  }

  OnUpdate() {
    this.UpdatingVisit = false;
    this.EmpresaSelected = true;
    this.Empresa = this.Empresa;
    this.Visita = this.Visita;
  }

}
