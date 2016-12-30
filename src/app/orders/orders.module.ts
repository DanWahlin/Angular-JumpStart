import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }   from '../shared/shared.module';
import { ordersRouting } from './orders.routing';

@NgModule({
  imports:      [ CommonModule, ordersRouting.routes, SharedModule ],
  declarations: [ ordersRouting.components ]
})
export class OrdersModule { }