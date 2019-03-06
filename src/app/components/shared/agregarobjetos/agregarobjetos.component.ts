import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-agregarobjetos',
  templateUrl: './agregarobjetos.component.html',
  styleUrls: ['./agregarobjetos.component.css']
})
export class AgregarobjetosComponent implements OnInit {

  ObjetosForm: FormGroup;
  @Output() OnAdd = new EventEmitter();


  constructor() { }

  ngOnInit() {
    this.ObjetosForm = new FormGroup({
      'Descripcion': new FormControl('', [Validators.required]),
      'Cantidad': new FormControl('', [Validators.required]),
      'Comentario': new FormControl(''),
    });
  }

  AgregarObjeto() {
    const Objeto = {
      'id_objeto': '',
      'id_visita': '',
      'descripcion': this.ObjetosForm.controls['Descripcion'].value,
      'cantidad': this.ObjetosForm.controls['Cantidad'].value,
      'comentario': this.ObjetosForm.controls['Comentario'].value
    };

    this.OnAdd.emit(Objeto);
    this.ObjetosForm.reset();
  }

}
