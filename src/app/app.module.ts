//Modulos de angular
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';

import { FrutaCardComponent } from './components/fruta-card/fruta-card.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { CrudFrutaComponent } from './components/crud-fruta/crud-fruta.component';
import { DetalleFrutaComponent } from './components/detalle-fruta/detalle-fruta.component';
import { LoginComponent } from './components/login/login.component';
import { BackofficeComponent } from './components/backoffice/backoffice.component';

//Providers
import { FrutaService } from './providers/fruta.service';
import { LoginService } from './providers/login.service';

//Guards
import { BackofficeGuard } from './guards/backoffice.guard';

//Pipes
import { OfertaPipe } from './pipes/oferta.pipe';
import { BuscadorNombrePipe } from './pipes/buscador-nombre.pipe';

@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    Page404Component,    
    FrutaCardComponent,
    ComparadorComponent,    
    CrudFrutaComponent,
    DetalleFrutaComponent,
    BackofficeComponent,
    LoginComponent,
    OfertaPipe,
    BuscadorNombrePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //banana in a box(ngModule)
    ReactiveFormsModule,
    HttpClientModule, // peticiones http
  ],
  providers: [
    FrutaService,   
    LoginService,
    BackofficeGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
