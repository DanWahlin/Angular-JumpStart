import { NgModule }      from '@angular/core';

import { SharedModule }   from '../shared/shared.module';
import { ordersRouting } from './orders.routing';

@NgModule({
  imports:      [ ordersRouting.routes, SharedModule ],
  declarations: [ ordersRouting.components ]
})
export class OrdersModule { }