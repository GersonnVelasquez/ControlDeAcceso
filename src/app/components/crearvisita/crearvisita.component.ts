import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crearvisita',
  templateUrl: './crearvisita.component.html',
  styleUrls: ['./crearvisita.component.css']
})
export class CrearvisitaComponent implements OnInit {

  PersonasVisita = [];
  Objetos = [];
  PersonasVisitasTable = [
    {
      'Nombre': 'No Identidad',
      'Value': 'n_identidad'
    },
    {
      'Nombre': 'Nombre',
      'Value': 'nombre'
    }];

    ObjetosTable = [
      {
        'Nombre': 'Descripcion',
        'Value': 'descripcion'
      },
      {
        'Nombre': 'Cantidad',
        'Value': 'cantidad'
      },
      {
        'Nombre': 'Comentario',
        'Value': 'comentario'
      }];

  constructor(private Message: ToastrService) { }

  ngOnInit() {
  }



  AgregarPersona(personaVisita): void {
    if (this.PersonasVisita.find(x => x.n_identidad === personaVisita.n_identidad) === undefined) {
      this.PersonasVisita.push(personaVisita);
      this.PersonasVisita = this.PersonasVisita.slice();
      this.Message.success('Persona Agregada a Visita.', 'Listo');
    } else {
      this.Message.error('Persona ya esta en la lista.', 'Error');
    }

  }

  AgregarObjeto(objeto): void {
    if (this.Objetos.find(x => x.descripcion === objeto.descripcion) === undefined) {
      this.Objetos.push(objeto);
      this.Objetos = this.Objetos.slice();
      this.Message.success('Ojeto Agregado a la lista.', 'Listo');
    } else {
      this.Message.error('Este ojeto ya esta en la lista.', 'Error');
    }
  }

  EliminarPersona(personaVisita) {
    this.PersonasVisita = this.PersonasVisita.filter(x => x.n_identidad !== personaVisita.n_identidad);
  }

  EliminarObjeto(objeto) {
    this.Objetos = this.Objetos.filter(x => x.descripcion !== objeto.descripcion);
  }

}
