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
  id_persona: number;
  personaNueva;

  @Output() OnAdd = new EventEmitter();

  constructor(private persona: PersonasService) {
    this.getPersonas();
  }

  ngOnInit() {
    this.PersonasForm = new FormGroup({
      'Nombre': new FormControl('', [Validators.required]),
      'NoIdentidad': new FormControl('', [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(15)
      ]),
      'Correo': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')
      ]),
      'Telefono': new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
    });
  }

  getPersonas() {
    this.persona.getPersonas().subscribe(
      (data: any) => {
        this.Personas = data;
      });
  }

  AddPersona() {
    this.personaNueva = {
      'id_persona': this.id_persona,
      'nombre': this.PersonasForm.controls['Nombre'].value,
      'n_identidad': this.PersonasForm.controls['NoIdentidad'].value,
      'correo': this.PersonasForm.controls['Correo'].value,
      'telefono': this.PersonasForm.controls['Telefono'].value
    };

    if (this.Personas.length === 0) {
      this.InsertPersona(this.personaNueva);
    }

    let index = 1;
    for (const i of this.Personas) {
      if (i.n_identidad === this.personaNueva.n_identidad) {
        this.PersonasForm.reset();
        this.OnAdd.emit(this.personaNueva);
        break;
      } else if (index === this.Personas.length) {
        this.InsertPersona(this.personaNueva); // Agregar nueva persona
        break;
      }
      index++;
    }
  }

  InsertPersona(personaNueva) {
    this.persona.addPersona(personaNueva).subscribe(
      (data: any ) => {
        this.personaNueva = {
          'id_persona': data.id_persona,
          'nombre': data.nombre,
          'n_identidad': data.n_identidad,
          'correo': data.correo,
          'telefono': data.telefono
        };
      },
      _error => {
        alert('Error');
      },
      () => {
        this.PersonasForm.reset();
        this.getPersonas();
        this.OnAdd.emit( this.personaNueva);
      });
  }

  SetData(identidad) {
    for (const i of this.Personas) {
      if (i.n_identidad === identidad) {
        this.id_persona = i.id_persona;
        this.PersonasForm.controls['Nombre'].setValue(i.nombre);
        this.PersonasForm.controls['Correo'].setValue(i.correo);
        this.PersonasForm.controls['Telefono'].setValue(i.telefono);
        break;
      } else {
        this.PersonasForm.controls['Nombre'].setValue('');
        this.PersonasForm.controls['Correo'].setValue('');
        this.PersonasForm.controls['Telefono'].setValue('');
      }
    }
  }


}
