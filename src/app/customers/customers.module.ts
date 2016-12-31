import { NgModule }      from '@angular/core';

import { SharedModule }   from '../shared/shared.module';
import { customersRouting } from './customers.routing';

@NgModule({
  imports:      [ customersRouting.routes, SharedModule ],
  declarations: [ customersRouting.components ]
})
export class CustomersModule { }