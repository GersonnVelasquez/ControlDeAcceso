import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/administracionIT/usuarios.service';
import { ToastrService } from 'ngx-toastr';
import { EmpresasService } from 'src/app/servicios/administracionIT/empresas.service';
import { RolesService } from 'src/app/servicios/administracionIT/roles.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  UsuariosData = [];
  RolesData = [];
  EmpresasData = [];

  UsuarioForm: FormGroup;
  constructor(private usuarios: UsuariosService,
    private Message: ToastrService,
    private empresas: EmpresasService,
    private roles: RolesService) {
  }

  ngOnInit() {
    this.getInfo();
    this.GetUsuarios();

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

  getInfo() {
    this.empresas.GetEmpresas().subscribe(
      data => {
        this.EmpresasData = data;
      });
    this.roles.GetRoles().subscribe(
      data => {
        this.RolesData = data;
      });
  }

  passwordMatch(control: FormControl): { [key: string]: boolean } | null {
    if (this.UsuarioForm.controls['Password'].value !== control.value) {
      return {
        passMatch: true
      };
    }
    return null;
  }


  AgregarUsuario(): void {
    const Usuario = {
      'id_usuario': '',
      'nombre': this.UsuarioForm.controls['Nombre'].value,
      'usuario1': this.UsuarioForm.controls['Usuario'].value,
      'contrasena': this.UsuarioForm.controls['Password'].value,
      'correo': this.UsuarioForm.controls['Correo'].value,
      'id_rol': 0,
      'id_empresa': 0
    };

    this.usuarios.AddUsuario(Usuario).subscribe(
      _ => {
      },
      _error => {
        alert('Error');
      },
      () => {
        this.GetUsuarios();
        this.UsuarioForm.reset();
        this.Message.success('Usuario Agregado Correctamente', 'Listo!');
      }
    );
  }

  GetUsuarios(): void {
    this.usuarios.GetUsuarios().subscribe(
      data => {
        this.UsuariosData = data;
      });
  }

  DeleteUsuario(usuario): void {
    this.usuarios.DeleteUsuario(usuario).subscribe(
      _ => {
      },
      _error => {
        alert('Error');
      },
      () => {
        this.GetUsuarios();
        this.UsuarioForm.reset();
        this.Message.success('Usuario Eliminado Correctamente', 'Listo!');
      }
    );
  }

}
