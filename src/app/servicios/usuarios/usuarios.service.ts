import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public usuarios = [];

  constructor() { }

  public addUsuario(usuario): void {
    this.usuarios.push(usuario);
  }
}
