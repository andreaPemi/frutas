import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../providers/login.service';


@Injectable({
  providedIn: 'root'
})
export class BackofficeGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {
    console.log("constructor backoffice guard");
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.log("constructor backoffice guard");

    if (!this.loginService.isLogged()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;

  }
}
