import { Component, OnInit } from '@angular/core';
import { VisitasService } from 'src/app/servicios/ControlVisitas/visitas.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmpresasService } from 'src/app/servicios/administracionIT/empresas.service';



@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  data = [];
  constructor(private visita:EmpresasService) { }

  ngOnInit() {
    this.visita.GetEmpresas().subscribe(data => {
      this.data = data;
    });
  }



}
