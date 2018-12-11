import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { CrudFrutaComponent } from './components/crud-fruta/crud-fruta.component';
import { DetalleFrutaComponent } from './components/detalle-fruta/detalle-fruta.component';
import { BackofficeComponent } from './components/backoffice/backoffice.component';
import { BackofficeGuard } from './guards/backoffice.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},  
  {path:'comparador', component:ComparadorComponent},  
  {path: 'detalle/:id', component: DetalleFrutaComponent},
  {path:'fruta-crud', component:CrudFrutaComponent},
  {path:'detalle', component:DetalleFrutaComponent}, 
  {path: 'privado', component: BackofficeComponent, canActivate:[BackofficeGuard]},
  {path: 'login', component: LoginComponent},
  {path:'',redirectTo: '/home', pathMatch: 'full'},
  {path:'**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
