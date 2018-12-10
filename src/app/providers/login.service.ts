import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
const USUARIO_NOMBRE = "admin";
const USUARIO_PASSWORD = "12345678";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuario: Usuario

  constructor() {
    console.trace("LoginService constructor");
    this.usuario = undefined;
  }

  //Comprueba si está logueado
  isLogged(): boolean {
    console.trace("LoginService isLogged");
    if (this.usuario) {
      return true;
    } else {
      return false;
    }
  }

  //Acaba la session el usuario
  logout(): void {
    console.trace("LoginService logout");
    this.usuario = undefined;
  }

  login(u: Usuario): boolean {
    console.trace("LoginService login %o",u);
    if (u && u.nombre === USUARIO_NOMBRE && u.password === USUARIO_PASSWORD) {
     console.debug('usuario logueado');
      this.usuario=u;
      return true;
    } else {
      console.warn('usuario no logueado');
      this.usuario = undefined;
      return false;
    }
  }

}
