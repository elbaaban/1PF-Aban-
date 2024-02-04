import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoDialogComponent } from './alumno-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlumnoDialogComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule

  ],
})
export class AlumnoDialogModule {}
