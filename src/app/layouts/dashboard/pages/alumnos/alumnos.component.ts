import { Component } from '@angular/core';
import { AlumnosServicio } from './alumnos.service';
import { Alumno } from './models';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoDialogComponent } from './components/alumno-dialog/alumno-dialog.component';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'], // Corrige el nombre de la propiedad
})
export class AlumnosComponent {
  displayedColumns = ['id', 'nombre', 'Cursos', 'createdAt', 'actions']; // Asegúrate de que 'actions' coincida con el HTML

  alumnos: Alumno[] = [];

  constructor(
    private alumnosServicio: AlumnosServicio,
    public dialog: MatDialog
  ) {
    this.alumnosServicio.getAlumnos().subscribe({
      next: (alumnos) => {
        this.alumnos = alumnos;
      },
    });
  }
  onCreate(): void {
    this.dialog
      .open(AlumnoDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if(result){
            this.alumnosServicio.createAlumno(result).subscribe({
              next: (alumnos)=>(this.alumnos=this.alumnos),
            });
          }
        }
      });
  }
onEdit(Alumno: Alumno){
  this.dialog.open(AlumnoDialogComponent,{
    data:Alumno,
  })
}
  onDelete(id: number) {
    this.alumnosServicio.deleteAlumnoById(id).subscribe({
      next: (alumnos) => {
        this.alumnos = alumnos;
      },
    });
  }
}
