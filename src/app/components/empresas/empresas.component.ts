import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
 public Datos = [
    {
      'Nombre': 'Gersonn',
      'Apellido': 'Velasquez',
      'Edad': 25
    },
    {
      'Nombre': 'Gersonn',
      'Apellido': 'Velasquez',
      'Edad': 8
    },
    {
      'Nombre': 'Gersonn',
      'Apellido': 'Velasquez',
      'Edad': 12
    },
    {
      'Nombre': 'Gersonn',
      'Apellido': 'Velasquez',
      'Edad': 33
    },
    {
      'Nombre': 'Gersonn',
      'Apellido': 'Velasquez',
      'Edad': 54
    },
    {
      'Nombre': 'Gersonn',
      'Apellido': 'Velasquez',
      'Edad': 34
    },
    {
      'Nombre': 'Gersonn',
      'Apellido': 'Velasquez',
      'Edad': 1
    },
    {
      'Nombre': 'Gersonn',
      'Apellido': 'Velasquez',
      'Edad': 55
    },
    {
      'Nombre': 'Gersonn',
      'Apellido': 'Velasquez',
      'Edad': 22
    },
    {
      'Nombre': 'Gersonn',
      'Apellido': 'Velasquez',
      'Edad': 66
    },
    {
      'Nombre': 'Gersonn',
      'Apellido': 'Velasquez',
      'Edad': 43
    },
    {
      'Nombre': 'Gersonn',
      'Apellido': 'Velasquez',
      'Edad': 25
    },
    {
      'Nombre': 'Lazaro',
      'Apellido': 'Leiva',
      'Edad': 12
    },
    {
      'Nombre': 'Gersonn',
      'Apellido': 'Velasquez',
      'Edad': 23
    },
    {
      'Nombre': 'Pedro',
      'Apellido': 'Antunez',
      'Edad': 22
    },
    {
      'Nombre': 'Maria',
      'Apellido': 'Dias',
      'Edad': 12
    },
    {
      'Nombre': 'Ana',
      'Apellido': 'Tabora',
      'Edad': 34
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
