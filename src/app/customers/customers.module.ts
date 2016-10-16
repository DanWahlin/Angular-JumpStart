import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }   from '../shared/shared.module';
import { customersRouting } from './customers.routing';

@NgModule({
  imports:      [ CommonModule, customersRouting.routes, SharedModule ],
  declarations: [ customersRouting.components ]
})
export class CustomersModule { }