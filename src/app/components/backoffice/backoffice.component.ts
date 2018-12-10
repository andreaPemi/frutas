import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { LoginService } from '../../providers/login.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {


  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  cerrar() {
    this.loginService.logout();
    this.router.navigate(['login']);
  }
}
