import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RolesComponent } from './components/roles/roles.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { GtableComponent } from './components/shared/gtable/gtable.component';
import { SortPipe } from './customPipes/sort/sort.pipe';
import { FilterPipe } from './customPipes/filter/filter.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

// alertas
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CrearvisitaComponent } from './components/crearvisita/crearvisita.component';
import { ConsultavisitasComponent } from './components/consultavisitas/consultavisitas.component';
import { AgregarpersonaComponent } from './components/shared/agregarpersona/agregarpersona.component';
import { AgregarobjetosComponent } from './components/shared/agregarobjetos/agregarobjetos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    InicioComponent,
    UsuariosComponent,
    RolesComponent,
    EmpresasComponent,
    GtableComponent,
    SortPipe,
    FilterPipe,
    CrearvisitaComponent,
    ConsultavisitasComponent,
    AgregarpersonaComponent,
    AgregarobjetosComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
