import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerComponent } from './customer.component';
import { CustomerDetailsComponent } from './customerDetails.component';
import { CustomerEditComponent } from './customerEdit.component';
import { CustomerOrdersComponent } from './customerOrders.component';
import { SharedModule }   from '../shared/shared.module';
import { customer_routing } from './customer.routing';

@NgModule({
  imports:      [ CommonModule, customer_routing, SharedModule ],
  declarations: [ CustomerComponent, CustomerDetailsComponent, 
                  CustomerEditComponent, CustomerOrdersComponent ]
})
export default class AppModule { }