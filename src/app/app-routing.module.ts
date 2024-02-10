import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LoginComponent } from './layouts/auth/pages/login/login.component';
import { UsuariosComponent } from './layouts/dashboard/pages/usuarios/usuarios.component';
import { HomeComponent } from './layouts/dashboard/pages/home/home.component';
import { UsuarioFormularioComponent } from './layouts/dashboard/pages/usuarios/components/usuario-formulario/usuario-formulario.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import { AuthModule } from './layouts/auth/auth.module';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [authGuard],
    component: DashboardComponent,
    loadChildren: () =>
      import('./layouts/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },

 // {
   // path: 'auth/login',
    //component: LoginComponent,
  //},
  {
     path:'auth',
     canActivate: [authGuard],
     loadChildren:()=>
     import('./layouts/auth/auth.module').then((m)=> m.AuthModule),
  },
  {
    path: 'usuario/formulario',
    canActivate: [authGuard],
    component: UsuarioFormularioComponent,
  },
  {
    path: '404',
    canActivate: [authGuard],
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
