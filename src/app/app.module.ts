import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ManagerShippingComponent } from './components/manager-shipping/manager-shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerShippingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ManagerShippingComponent
  ]
})
export class AppModule { }
