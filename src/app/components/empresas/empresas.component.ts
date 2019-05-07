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
  testData: FormData = new FormData();
  Empresas = [];
  EmpresasForm: FormGroup;

  constructor(private empresas: EmpresasService, private Message: ToastrService) { }

  ngOnInit() {
    this.GetEmpresas();
    this.EmpresasForm = new FormGroup({
      'NombreEmpresa': new FormControl('', [Validators.required]),
      'Logo': new FormControl()
    });
  }


  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.EmpresasForm.controls['logo'] = file;
      console.log(file);
    }
  }


  private NewEmpresa(): any {
    const input = new FormData();
    input.append('id_empresa', '');
    input.append('nombre', this.EmpresasForm.controls['NombreEmpresa'].value);
    input.append('logo', this.Logo);
    return input;
  }

  AgregarEmpresa(): void {
    const Empresa = this.NewEmpresa();

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
