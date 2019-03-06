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

  constructor(private Message: ToastrService) { }

  ngOnInit() {
  }



  AgregarPersona(personaVisita): void {
    if (this.PersonasVisita.find(x => x.n_identidad === personaVisita.n_identidad) === undefined) {
      this.PersonasVisita.push(personaVisita);
      this.Message.success('Persona Agregada a Visita.', 'Listo');
    } else {
      this.Message.error('Persona ya esta en la lista.', 'Error');
    }

  }
  AgregarObjeto(objeto): void {
    console.log(objeto);
    if (this.Objetos.find(x => x.descripcion === objeto.descripcion) === undefined) {
      this.Objetos.push(objeto);
      this.Message.success('Ojeto Agregado a la lista.', 'Listo');
    } else {
      this.Message.error('Este ojeto ya esta en la lista.', 'Error');
    }
  }

  EliminarPersona(personaVisita) {
    this.PersonasVisita = this.PersonasVisita.find(x => x.n_identidad !== personaVisita.n_identidad);
  }

  EliminarObjeto(objeto) {
    this.Objetos = this.Objetos.find(x => x.descripcion !== objeto.descripcion);

  }

}
