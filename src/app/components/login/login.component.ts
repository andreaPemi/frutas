import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { LoginService } from '../../providers/login.service';
import { Usuario } from '../../model/usuario';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  formulario: FormGroup;
  mensaje:string;

  constructor(private loginService:LoginService, private router:Router) {
    console.trace("constructor login");
    this.agrupacionInput();
    this.mensaje="";
   }

  ngOnInit() {
    console.trace("init login");
  }

  private agrupacionInput(){
    //Agrupacion de controles==formulario
    this.formulario = new FormGroup({
      nombre: new FormControl('',
        [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25)]
      ),
      password: new FormControl('',
        [Validators.required,
          Validators.minLength(6),
          Validators.maxLength(25)]
      )
       
    });
  }

  sumitar(){
    console.log('login sumitar');
    //TODO llamar LoginService
    let nombre=this.formulario.controls.nombre.value;
    let password=this.formulario.controls.password.value;
    console.debug(`nombre=${nombre} password=${password}`);
   
    let u=new Usuario();
    u.nombre=nombre;
    u.password=password;

    //LLamar al serviceLogin
    if(this.loginService.login(u)){

      this.router.navigate(['privado']);
      
    }else{
      this.mensaje="Credenciales no validas, por favor prueba de nuevo";
    }


    
  }


}
