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
import {MatListModule} from '@angular/material/list';
import { UserDetailComponent } from './pages/usuarios/pages/user-detail/user-detail.component';

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
        component: UsuariosComponent,

      },
      {
        path: 'usuario/:id',
        component:UserDetailComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      },
    ]),
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
