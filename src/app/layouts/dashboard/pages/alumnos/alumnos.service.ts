import { Injectable } from "@angular/core";
import { delay, of, pipe } from 'rxjs';
import { Alumno } from "./models";
let alumnos : Alumno[]=[
  {
   id:1,
   nombre:'Elba Aban',
   cursos:'Programacion',
   createdAt: new Date(),
  },
  {
   id:2,
   nombre:'Luis Aban',
   cursos:'Enfermeria',
   createdAt: new Date(),
  }
  ,
  {
   id:3,
   nombre:'Cari Aban',
   cursos:'Licenciatura en Emfermeria',
   createdAt: new Date(),
  }

   ]
@Injectable()
export class AlumnosServicio{
 getAlumnos(){
  return of(alumnos).pipe(delay(1500));
 }

 createAlumno(data:Alumno){
  alumnos =[...alumnos,{...data, id: alumnos.length+1}];
  return this.getAlumnos();
 }
 deleteAlumnoById(id:number){
 alumnos=alumnos.filter((el)=> el.id != id);
 return of(alumnos);
 }

}
