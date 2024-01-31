import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  showFiller = false;
  today: Date = new Date(); // Inicializar la propiedad today con la fecha actual
  private intervalSubscription: Subscription | undefined;

  constructor() {
    // Asignar un valor a intervalSubscription
    this.intervalSubscription = undefined;
  }

  ngOnInit(): void {
    // Actualiza la hora cada segundo
    this.intervalSubscription = interval(1000).subscribe(() => {
      this.today = new Date();
    });
  }

  ngOnDestroy(): void {
    // Limpia la suscripción al destruir el componente
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }
}
