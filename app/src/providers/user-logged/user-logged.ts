import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserLoggedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserLoggedProvider {

  public usuario: any;
  public tipo: string;

  constructor() {
    console.log('Hello UserLoggedProvider Provider');
  }

  setUsuario(usuario, tipo) {
    this.usuario = usuario;
    this.tipo = tipo;
  }

  getUsuario() {
    return {user: this.usuario, tipo: this.tipo};
  }

  cleanUser() {
    this.usuario = null;
    this.tipo = null;
  }



}
