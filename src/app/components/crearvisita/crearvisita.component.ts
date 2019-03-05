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
     this.PersonasVisita.push(personaVisita);
    this.Message.success('Persona Agregada a Visita', 'Listo');
  }

  AgregarObjeto(): void {

  }
}
