import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LoginComponent } from './layouts/auth/pages/login/login.component';
import { UsuariosComponent } from './layouts/dashboard/pages/usuarios/usuarios.component';
import { HomeComponent } from './layouts/dashboard/pages/home/home.component';
import { UsuarioFormularioComponent } from './layouts/dashboard/pages/usuarios/components/usuario-formulario/usuario-formulario.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
      import('./layouts/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },

  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'usuario/formulario',
    component: UsuarioFormularioComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
