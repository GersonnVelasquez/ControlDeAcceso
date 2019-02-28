import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/servicios/administracionIT/roles.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  Roles = [];
  RolesForm: FormGroup;
  constructor(private roles: RolesService, private Message: ToastrService) { }

  ngOnInit() {
    this.GetRoles();
    this.RolesForm = new FormGroup({
      'Descripcion': new FormControl('', [Validators.required]),
    });
  }

  AgregarRol(): void {
    const Rol = {
      'id_rol': '',
      'descripcion': this.RolesForm.controls['Descripcion'].value
    };
    this.roles.AddRol(Rol).subscribe(
      _ => {
      },
      _error => {
        alert('Error');
      },
      () => {
        this.GetRoles();
        this.RolesForm.reset();
        this.Message.success('Rol Agregado Correctamente', 'Listo!');
      }
    );
  }

  GetRoles(): void {
    this.roles.GetRoles().subscribe(
      data => {
        this.Roles = data;
      });
  }

  DeleteRol(Rol): void {
    this.roles.DeleteRol(Rol).subscribe(
      _ => {
      },
      _error => {
        alert('Error');
      },
      () => {
        this.GetRoles();
        this.RolesForm.reset();
        this.Message.success('Rol Eliminado Correctamente', 'Listo!');
      }
    );
  }

}
