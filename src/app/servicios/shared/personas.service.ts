import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  personas = [
    {
      'id_persona': '1',
      'nombre': 'Gersonn',
      'n_identidad': '0105-2323-11',
      'correo': 'asd@dsd.com',
      'telefono': '12323'
    },
    {
      'id_persona': '2',
      'nombre': 'Maria',
      'n_identidad': '123123-123123-123',
      'correo': 'dqwew@asds.com',
      'telefono': '344343'
    },
    {
      'id_persona': '3',
      'nombre': 'Pedro',
      'n_identidad': '11233-23223-123123',
      'correo': 'asdasd@dasd.com ',
      'telefono': '1231231231'
    },

  ];
  constructor() { }

  getPersonas() {
    return this.personas;
  }

  addPersona(Persona) {
      this.personas.push(Persona);
  }

}
