import { Injectable } from '@angular/core';
import { Usuario } from './../../layouts/dashboard/pages/usuarios/models/indes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AlertsService } from './alerts.service';
import { HttpClient } from '@angular/common/http';




const ROLES_DB: string[] = ['ADMIN', 'USER'];

let USERS_DB: Usuario[] = [

];

@Injectable()
export class UsuariosService {

  constructor(private AlertsService: AlertsService, private httpsclient: HttpClient) {}

 getUserById(id:number|string):Observable<Usuario| undefined>{
 return of( USERS_DB.find((Usuario)=> Usuario.id==id))
 }

  getRoles(): Observable<string[]> {
    return of(ROLES_DB).pipe(delay(1000)) as Observable<string[]>;  // Añade 'as Observable<string[]>'
  }

  getUsers() {

   //return of(USERS_DB).pipe(delay(1000)) as Observable<Usuario[]>;
   return this.httpsclient.get<Usuario[]>('http://localhost:3000/users') // Añade 'as Observable<Usuario[]>'

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
