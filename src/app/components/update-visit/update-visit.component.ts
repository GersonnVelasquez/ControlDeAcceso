import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ObjetosService } from 'src/app/servicios/ControlVisitas/objetos.service';
import { VisitasService } from 'src/app/servicios/ControlVisitas/visitas.service';

@Component({
  selector: 'app-update-visit',
  templateUrl: './update-visit.component.html'
})
export class UpdateVisitComponent implements OnChanges {

  Personas = [];
  Objetos = [];
  @Output() OnCancel = new EventEmitter();
  @Input() visita;
  @Input() NombreEmpresa;
  @Input() Entrada = false;
  @Input() Salida = false;

  VisitasForm: FormGroup;

  constructor(private visitadetalle: VisitasService, private objetos: ObjetosService) {

   }

  ngOnChanges() {
    this.getInfo();
  }

  getInfo() {
    this.visitadetalle.GetVisitasDetalle(this.visita.id_visita).subscribe(
      (data: any) => {
        this.Personas = data;
      });

      this.objetos.GetObjeotosbyVisita(this.visita.id_visita).subscribe(
        (data: any) => {
          this.Objetos = data;
        });

   }


  Cancelar() {
    this.OnCancel.emit();
  }

  UpdateVisitas() {

  }

}
