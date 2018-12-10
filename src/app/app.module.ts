import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { FrutaService } from './providers/fruta.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComparadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //banana in a box(ngModule)
    ReactiveFormsModule,
    HttpClientModule, // peticiones http
  ],
  providers: [
    FrutaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
