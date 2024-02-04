// alumno-dialog.component.ts
import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumno } from '../../models';

@Component({
  selector: 'app-alumno-dialog',
  templateUrl: './alumno-dialog.component.html',
  styleUrls: ['./alumno-dialog.component.scss'], // Corrige el nombre de la propiedad
})
export class AlumnoDialogComponent {
  alumnoForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AlumnoDialogComponent>,
    @Inject (MAT_DIALOG_DATA)private editingAlumno?: Alumno,
  ) {
    this.alumnoForm = this.fb.group({
      name: this.fb.control(''),
      createdAt: this.fb.control(''),
    });
  }
  onSave(): void {
    this.dialogRef.close(this.alumnoForm.value);
  }
}
