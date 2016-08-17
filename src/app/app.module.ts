import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersCardComponent } from './customers/customersCard.component';
import { CustomersGridComponent } from './customers/customersGrid.component';
import { FilterTextboxComponent } from './filterTextbox/filterTextbox.component';

import { app_routing } from './app.routing';
import { SharedModule }   from './shared/shared.module';

@NgModule({
  imports:      [ BrowserModule, app_routing, SharedModule.forRoot() ],
  declarations: [ AppComponent, CustomersComponent, CustomersCardComponent, CustomersGridComponent, FilterTextboxComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }