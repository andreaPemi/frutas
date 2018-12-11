import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './providers/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Primera app Angular';
  autor = 'Andrea';

  constructor(private router: Router, private loginService: LoginService) {

  }
  cerrar() {
    this.loginService.logout();
    this.router.navigate(['comparador']);
  }

  logueado() {
    if (this.loginService.isLogged()) {
      return true
    } else { return false }
  }

}
