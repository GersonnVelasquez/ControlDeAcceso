import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonasService } from 'src/app/servicios/shared/personas.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-agregarpersona',
  templateUrl: './agregarpersona.component.html',
  styleUrls: ['./agregarpersona.component.css']
})
export class AgregarpersonaComponent implements OnInit {

  Personas = [];
  PersonasForm: FormGroup;


  @Output() OnAdd = new EventEmitter();
  constructor(private persona: PersonasService) {
    this.Personas = persona.getPersonas();
    console.log(this.Personas);
  }

  ngOnInit() {
    this.PersonasForm = new FormGroup({
      'Nombre': new FormControl('', [Validators.required]),
      'NoIdentidad': new FormControl('', [Validators.required]),
      'Correo': new FormControl('', [Validators.required]),
      'Telefono': new FormControl('', [Validators.required]),
    });
  }

  AddPersona() {
    const personaNueva =
    {
      'id_persona': '5',
      'nombre': this.PersonasForm.controls['Nombre'].value,
      'n_identidad': this.PersonasForm.controls['NoIdentidad'].value,
      'correo': this.PersonasForm.controls['Correo'].value,
      'telefono': this.PersonasForm.controls['Telefono'].value
    };
    this.persona.addPersona(personaNueva);
    this.OnAdd.emit(personaNueva);
  }

  SetData(DataPersona){

    console.log(DataPersona);
  }


}
