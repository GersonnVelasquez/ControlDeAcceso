import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/administracionIT/usuarios.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  Empresas = [];
  EmpresasForm: FormGroup;

  constructor(private usuarios: UsuariosService) { }

  ngOnInit() {
    this.EmpresasForm = new FormGroup({
      'NombreEmpresa': new FormControl('', [Validators.required]),
      'Logo': new FormControl()
    });
  }

  AgregarEmpresa(): void {
        console.log(this.EmpresasForm.value);
  }

}
