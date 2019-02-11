import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

    UsuariosData = [];
  UsuarioForm: FormGroup;
  constructor(private usuarios: UsuariosService) {
   }

  ngOnInit() {
    this.UsuariosData = this.usuarios.usuarios;
    this.UsuarioForm = new FormGroup({
      'Nombre': new FormControl('', [Validators.required]),
      'Usuario': new FormControl('', [Validators.required]),
      'Password': new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      'VerifPass': new FormControl('', [Validators.required]),
      'Correo': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')
      ]),
      'Rol': new FormControl('', [Validators.required]),
      'Empresa': new FormControl('', [Validators.required]),
    });

    this.UsuarioForm.controls['VerifPass'].setValidators([
      this.passwordMatch.bind(this)
    ]);
  }


  passwordMatch(control: FormControl): { [key: string]: boolean } | null {
    if (this.UsuarioForm.controls['Password'].value !== control.value) {
      return {
        passMatch: true
      };
    }
    return null;
  }

  AgregarUsuario() {
    console.log(this.UsuariosData);
    this.usuarios.addUsuario(this.UsuarioForm.value);
    this.UsuariosData = this.usuarios.usuarios;

  }

}
