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

@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioFormularioComponent,


  ],

  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
   ReactiveFormsModule,
   MatIconModule
  ],
  exports: [UsuariosComponent],
})
export class UsuariosModule {}
