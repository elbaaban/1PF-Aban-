import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatToolbarModule } from '@angular/material/toolbar';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { CategoriesModule } from './pages/categories/categories.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { MatListModule } from '@angular/material/list';
import { UserDetailComponent } from './pages/usuarios/pages/user-detail/user-detail.component';
import { adminGuard } from '../../core/guards/admin.guard';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UsuariosModule,
    MatListModule,
    CategoriesModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'usuario',
        canActivate:[adminGuard],
        loadChildren: () =>
          import('./pages/usuarios/usuarios.module').then(
            (m) => m.UsuariosModule
          ),
      },
      {
        path: 'Alumnos',
        canActivate:[adminGuard],
        loadChildren: () =>
          import('./pages/alumnos/alumnos.module').then((m) => m.AlumnosModule),
      },
      {
        path: 'usuario/:id',
        canActivate:[adminGuard],
        component: UserDetailComponent,
      },

      {
        path: '**',
        redirectTo: 'home',
      },
    ]),
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
