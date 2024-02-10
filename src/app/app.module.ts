import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



import { registerLocaleData } from '@angular/common';
import localeEsAR from '@angular/common/locales/es-AR';
import { DashboardModule } from './layouts/dashboard/dashboard.module';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

// Registra los datos de localización para español de Argentina
registerLocaleData(localeEsAR, 'es-AR');

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    HttpClientModule

  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-AR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
