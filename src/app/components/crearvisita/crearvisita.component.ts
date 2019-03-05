import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crearvisita',
  templateUrl: './crearvisita.component.html',
  styleUrls: ['./crearvisita.component.css']
})
export class CrearvisitaComponent implements OnInit {

  PersonasVisita = [];

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
  AgregarObjeto(): void {

  }
}
