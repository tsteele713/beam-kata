import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ManagerShippingComponent } from './components/manager-shipping/manager-shipping.component';
import { StarterBoxesComponent } from './components/starter-boxes/starter-boxes.component';
import { RefillBoxesComponent } from './components/refill-boxes/refill-boxes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    ManagerShippingComponent,
    StarterBoxesComponent,
    RefillBoxesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ManagerShippingComponent,
    StarterBoxesComponent,
    RefillBoxesComponent
  ]
})
export class AppModule { }
