import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ManagerShippingComponent } from './components/manager-shipping/manager-shipping.component';
import { StarterBoxesComponent } from './components/starter-boxes/starter-boxes.component';
import { RefillBoxesComponent } from './components/refill-boxes/refill-boxes.component';
import { ShippingSummaryComponent } from './components/shipping-summary/shipping-summary.component';
import { PatientService } from './services/patient.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ManagerShippingComponent,
    StarterBoxesComponent,
    RefillBoxesComponent,
    ShippingSummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [
    PatientService
  ],
  bootstrap: [
    AppComponent,
    ManagerShippingComponent,
    StarterBoxesComponent,
    RefillBoxesComponent,
    ShippingSummaryComponent
  ]
})
export class AppModule { }
