import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { MatTableModule } from '@angular/material/table';
import { UsuarioFormularioComponent } from './components/usuario-formulario/usuario-formulario.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { UsuariosService } from '../../../../core/servis/usuarios.service';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioFormularioComponent,
    UserDetailComponent,



  ],

  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
   ReactiveFormsModule,
   MatIconModule,
   RouterModule
  ],
  exports: [UsuariosComponent],
  providers:[UsuariosService]
})
export class UsuariosModule {}
