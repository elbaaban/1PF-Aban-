import { Component } from '@angular/core';
import { Usuario } from './models/indes';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosService } from '../../../../core/servis/usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'pais', 'roll', 'actions'];
  dataSource: Usuario[] = [
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
  constructor (private UsuariosService: UsuariosService){

  }



  onUserSubmitted(ev: Usuario): void {
    this.dataSource = [...this.dataSource, ev];
  }

  editUser(usuario: Usuario): void {
    // Implement the logic to edit the user here
  }

  deleteUser(usuario: Usuario): void {
    const index = this.dataSource.indexOf(usuario);
    if (index >= 0) {
      this.dataSource.splice(index, 1);
    }
  }



}
