import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EmpresasService } from 'src/app/servicios/administracionIT/empresas.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  Logo: File;

  Empresas = [];
  EmpresasForm: FormGroup;

  constructor(private empresas: EmpresasService, private Message: ToastrService) { }

  ngOnInit() {
    this.GetEmpresas();
    this.EmpresasForm = new FormGroup({
      'NombreEmpresa': new FormControl('', [Validators.required]),
      'Logo': new FormControl(),
      'NombreImagen': new FormControl()
    });
  }


  imageUpload(e) {
     this.Logo = e.target.files[0];
  }


  AgregarEmpresa(): void {
    const Empresa = {
      'id_empresa': '',
      'nombre': this.EmpresasForm.controls['NombreEmpresa'].value,
      'logo': this.Logo,
      'nombreimg': this.EmpresasForm.controls['NombreImagen'].value

    };
    this.empresas.AddEmpresas(Empresa).subscribe(
      _ => {
      },
      _error => {
        alert('Error');
      },
      () => {
        this.GetEmpresas();
        this.EmpresasForm.reset();
        this.Message.success('Empresa Agregada Correctamente', 'Listo!');
      }
    );
  }

  GetEmpresas(): void {
    this.empresas.GetEmpresas().subscribe(
      data => {
        this.Empresas = data;
      });
  }

  DeleteEmpresa(Empresa): void {
    this.empresas.DeleteEmpresas(Empresa).subscribe(
      _ => {
      },
      _error => {
        alert('Error');
      },
      () => {
        this.GetEmpresas();
        this.EmpresasForm.reset();
        this.Message.success('Empresa Eliminada Correctamente', 'Listo!');
      }
    );
  }

}
