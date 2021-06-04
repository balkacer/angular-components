import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableReservationQuantityComponent } from './components/table-reservation-quantity/table-reservation-quantity.component';

@NgModule({
  declarations: [
    AppComponent,
    TableReservationQuantityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
