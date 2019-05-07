import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ObjetosService } from 'src/app/servicios/ControlVisitas/objetos.service';
import { VisitasService } from 'src/app/servicios/ControlVisitas/visitas.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-visit',
  templateUrl: './update-visit.component.html'
})
export class UpdateVisitComponent implements OnChanges, OnInit {

  Personas = [];
  Objetos = [];
  @Output() OnCancel = new EventEmitter();
  @Output() OnUpdate = new EventEmitter();
  @Input() visita;
  @Input() NombreEmpresa;
  @Input() Entrada = false;
  @Input() Salida = false;

  VisitasForm: FormGroup;

  constructor(private visitadetalle: VisitasService, private objetos: ObjetosService, private Visita: VisitasService,
    private Message: ToastrService) {

  }
ngOnInit() {
  this.VisitasForm = new FormGroup({
    'Isfinal': new FormControl(false),
    'isOk': new FormControl(false)
  });

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
    const visitasFinales = [];
    const ObjetosFinales = [];

    for (const entry of this.Personas) {
      visitasFinales.push({
        'id_visita_detalle': entry.IdVisitaDetalle,
        'id_visita': '',
        'id_persona': '',
        'hr_entrada': entry.HoraEntrada,
        'hr_salida': entry.HoraSalida,
        'n_carnet': entry.NoCarnet,
        'observaciones': entry.Observaciones,
      });
    }

    for (const entry of this.Objetos) {
      ObjetosFinales.push({
        'id_objeto': entry.idObjeto,
        'id_visita': '',
        'descripcion': '',
        'cantidad': '',
        'comentario': entry.Comentario,
      });
    }

    const visita = {
      'isFinal': this.VisitasForm.controls['Isfinal'].value,
      'visita_detalle': visitasFinales,
      'objetos': ObjetosFinales
    };

    this.update(visita);

    this.OnUpdate.emit();
  }

  update(visita) {
    this.Visita.UpdateVisita(visita).subscribe(
      () => {
      },
      _error => {
        alert('Error');
      },
      () => {
        this.Message.success('Visita Actualizada', 'Listo');
        this.OnUpdate.emit();
      });
  }
}
