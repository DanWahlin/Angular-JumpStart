import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CustomerComponent } from './customer.component';
import { CustomerDetailsComponent } from './customerDetails.component';
import { CustomerEditComponent } from './customerEdit.component';
import { CustomerOrdersComponent } from './customerOrders.component';

import { customer_routing } from './customer.routing';
import { SharedModule }   from '../shared/shared.module';

@NgModule({
  imports:      [ BrowserModule, customer_routing, SharedModule.forRoot() ],
  declarations: [ CustomerComponent, CustomerDetailsComponent, 
                  CustomerEditComponent, CustomerOrdersComponent ]
})
export default class AppModule { }