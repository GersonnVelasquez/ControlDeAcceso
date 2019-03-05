import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RolesComponent } from './components/roles/roles.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { AuthGuadService } from './servicios/shared/auth-guad.service';
import { CrearvisitaComponent } from './components/crearvisita/crearvisita.component';
import { ConsultavisitasComponent } from './components/consultavisitas/consultavisitas.component';

const routes: Routes = [

  { path: '', component: CrearvisitaComponent},
  { path: 'inicio', component: InicioComponent, canActivate: [AuthGuadService] },
  { path: 'login', component: LoginComponent},
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuadService] },
  { path: 'roles', component: RolesComponent, canActivate: [AuthGuadService] },
  { path: 'empresas', component: EmpresasComponent, canActivate: [AuthGuadService] },
  { path: 'crearvisita', component: CrearvisitaComponent, canActivate: [AuthGuadService] },
  { path: 'consultavisitas', component: ConsultavisitasComponent, canActivate: [AuthGuadService] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
