import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { VisitasService } from 'src/app/servicios/ControlVisitas/visitas.service';
import { LoginService } from 'src/app/servicios/shared/login.service';

@Component({
  selector: 'app-crearvisita',
  templateUrl: './crearvisita.component.html',
  styleUrls: ['./crearvisita.component.css']
})
export class CrearvisitaComponent implements OnInit {

  VisitasForm: FormGroup;
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

  constructor(private Message: ToastrService, private visita: VisitasService, private login: LoginService) { }

  ngOnInit() {
    this.VisitasForm = new FormGroup({
      'TipoVisita': new FormControl('', [Validators.required]),
      'EmpresaProc': new FormControl(''),
      'FechaProgramada': new FormControl('', [Validators.required]),
      'HoraProgramada': new FormControl('', [Validators.required]),
      'PermisoTrabajo': new FormControl(false),
      'Descripcion': new FormControl('', [Validators.required]),
      'Vehiculos': new FormControl(''),
    });
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


  AgregarVisita() {
    const visita = {
      'id_visita': '',
      'tipo_visita': this.VisitasForm.controls['TipoVisita'].value,
      'id_usuario': this.login.UsuarioActual.id_usuario,
      'estado': '1',
      'id_empresa': this.login.UsuarioActual.id_empresa,
      'empresa_procedencia': this.VisitasForm.controls['EmpresaProc'].value,
      'fecha_creacion': '',
      'fecha_visita': this.VisitasForm.controls['FechaProgramada'].value,
      'hora_visita': this.VisitasForm.controls['HoraProgramada'].value,
      'id_permiso_trabajo': null,
      'placa_vehiculo': this.VisitasForm.controls['Vehiculos'].value,
      'descripcion': this.VisitasForm.controls['Descripcion'].value,
    };

    const nuevaVisita = {
      'visita': visita,
      'personas': this.PersonasVisita,
      'objetos': this.Objetos
    };

    this.visita.addVisita(nuevaVisita).subscribe(
      _ => {
      },
      _error => {
        alert('Error');
      },
      () => {
        this.VisitasForm.reset();
        this.PersonasVisita = [];
        this.Objetos = [];
        this.Message.success('Visita Programada Correctamente', 'Listo!');
      }
    );
  }
}
