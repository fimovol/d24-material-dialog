import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Asincrona24Component } from './asincrona24/asincrona24.component';
import { CanactivateGuard } from './canactivate.guard';
import { Pagina1Component } from './pagina1/pagina1.component';
import { BusquedaComponent } from './principal/busqueda/busqueda.component';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { LoginComponent } from './principal/login/login.component';
import { VistaComponent } from './principal/vista/vista.component';

const routes: Routes = [
  {path: 'vista', component: VistaComponent, canActivate: [CanactivateGuard]},
  {path: 'formulario', component: FormularioComponent, canActivate: [CanactivateGuard]},
  {path: 'busqueda', component: BusquedaComponent, canActivate: [CanactivateGuard]},
  {path: 'pagina1', component: Pagina1Component, canActivate: [CanactivateGuard]},
  {path: 'asincrona24', component: Asincrona24Component, canActivate: [CanactivateGuard]},
  
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
