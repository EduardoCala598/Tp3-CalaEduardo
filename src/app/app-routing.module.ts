import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { QueSoyComponent } from './components/que-soy/que-soy.component';

const routes: Routes = [

  { path:'inicio',component:InicioComponent},
  { path:'presentacion',component:PresentacionComponent},
  { path:'conocimientos',component:ConocimientosComponent},
  { path:'contacto',component:ContactoComponent},
  { path:'educacion',component:EducacionComponent},
  { path:'que-soy',component:QueSoyComponent},
  { path:'',redirectTo:'/inicio',pathMatch:'full'},
  { path:'**',component:InicioComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
