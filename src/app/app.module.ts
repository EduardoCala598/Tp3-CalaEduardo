import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { InicioComponent } from './components/inicio/inicio.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { ConocimientosComponent } from './components/conocimientos/conocimientos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { VideoRelevanteComponent } from './components/video-relevante/video-relevante.component';
import { QueSoyComponent } from './components/que-soy/que-soy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    PresentacionComponent,
    ConocimientosComponent,
    ContactoComponent,
    EducacionComponent,
    VideoRelevanteComponent,
    QueSoyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
