import { Injectable } from '@angular/core';
import { Usuario } from './../../layouts/dashboard/pages/usuarios/models/indes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';




const ROLES_DB: string[] = ['Admin', 'user'];
let USERS_DB: Usuario[] = [
  {
    id: 1,
    nombre: 'Elba',
    apellido: 'Aban',
    email: 'elbajonas16@gmail.com',
    pais: 'Argentina',
    roll: 'Admin'
  },
  {
    id: 2,
    nombre: 'Cari',
    apellido: 'Aban',
    email: 'carito@gmail.com',
    pais: 'Argentina',
    roll: 'Admin'
  },
  {
    id: 3,
    nombre: 'Luis',
    apellido: 'Aban',
    email: 'luis@gmail.com',
    pais: 'Argentina',
    roll: 'User'
  }
];

@Injectable()
export class UsuariosService {

  constructor() {}

 getUserById(id:number|string):Observable<Usuario| undefined>{
 return of( USERS_DB.find((Usuario)=> Usuario.id==id))
 }

  getRoles(): Observable<string[]> {
    return of(ROLES_DB).pipe(delay(1000)) as Observable<string[]>;  // Añade 'as Observable<string[]>'
  }

  getUsers() {
    return of(USERS_DB).pipe(delay(1000)) as Observable<Usuario[]>;  // Añade 'as Observable<Usuario[]>'
  }
  create(payload: Usuario){
     USERS_DB.push(payload);
     return this.getUsers();
  }
  deleteUsuario(userID:number){
    USERS_DB= USERS_DB.filter((Usuario)=>Usuario.id !==userID);
    return this.getUsers();
  }
}
