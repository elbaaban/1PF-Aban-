import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatToolbarModule } from '@angular/material/toolbar';
import { UsuariosModule } from './pages/usuarios/usuarios.module';
import { CategoriesModule } from './pages/categories/categories.module';

@NgModule({
  declarations: [DashboardComponent ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UsuariosModule,

    CategoriesModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
