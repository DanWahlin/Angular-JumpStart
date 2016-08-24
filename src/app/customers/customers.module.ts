import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './customers.component';
import { CustomersCardComponent } from './customersCard.component';
import { CustomersGridComponent } from './customersGrid.component';
import { FilterTextboxComponent } from '../filterTextbox/filterTextbox.component';
import { SharedModule }   from '../shared/shared.module';
// import { CoreModule }   from '../core/core.module';
import { customers_routing } from './customers.routing';

@NgModule({
  imports:      [ CommonModule, customers_routing, SharedModule], //, CoreModule ],
  declarations: [ CustomersComponent, CustomersCardComponent, 
                  CustomersGridComponent, FilterTextboxComponent ],
  exports:      [ CustomersComponent ]
})
export class CustomersModule { }