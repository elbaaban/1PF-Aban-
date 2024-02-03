import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { UsuariosService } from '../../../../../../core/servis/usuarios.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {

  constructor (private Route :ActivatedRoute, private UsuariosService: UsuariosService){

    this.UsuariosService.getUserById((this.Route.snapshot.params['id'])).subscribe({
      next: (findedUsuario) =>{
        console.log(findedUsuario);
      }
    })
  }
}
