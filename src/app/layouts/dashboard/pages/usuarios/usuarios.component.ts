import { Component, OnInit } from '@angular/core';
import { Usuario } from './models/indes';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosService } from '../../../../core/servis/usuarios.service';
import { LoadingService } from '../../../../core/servis/loadig.service';
import { forkJoin, Subscriber } from 'rxjs';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'fullName',
    'email',
    'pais',
    'roll',
    'actions',
  ];
  dataSource: Usuario[] = [];
  roles: string[] = [];

  constructor(
    private UsuariosService: UsuariosService,
    private LoadingService: LoadingService,
    private route : ActivatedRoute
  ) {
    console.log(this.route.snapshot.queryParams)
  }

  ngOnInit(): void {
    this.getPageData();
  }

  getPageData(): void {
    this.LoadingService.setIsLoading(true);

    forkJoin([
      this.UsuariosService.getRoles(),
      this.UsuariosService.getUsers(),
    ]).subscribe({
      next: (value) => {
        this.roles = value[0];
        this.dataSource = value[1];
      },
      complete: () => {
        this.LoadingService.setIsLoading(false);
      },
    });
  }

  onUserSubmitted(ev: Usuario): void {
    //this.dataSource = [...this.dataSource, ev];
    this.LoadingService.setIsLoading(true);
    this.UsuariosService.create({ ...ev, id: new Date().getTime() }).subscribe({
      next: (Usuario) => {
        this.dataSource = [...Usuario];
      },
    });
  }

  editUser(usuario: Usuario): void {
    // Implement the logic to edit the user here
  }

  OndeleteUser(ev: Usuario): void {
    this.LoadingService.setIsLoading(true);
    this.UsuariosService.deleteUsuario(ev.id).subscribe({
      next: (Usuario) => {
        this.dataSource =[...Usuario];

      },
      complete: ()=>{
        this.LoadingService.setIsLoading(false)
      }
    });
  }
}
