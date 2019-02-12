import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/servicios/administracionIT/roles.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  Roles = [];
  RolesForm: FormGroup;
  constructor(private roles: RolesService) { }

  ngOnInit() {
    this.RolesForm = new FormGroup({
      'Descripcion': new FormControl('', [Validators.required]),
    });
  }

  AgregarRol(): void {

  }

}
