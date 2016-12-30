import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }   from '../shared/shared.module';
import { ordersRouting } from './orders.routing';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  imports:      [ CommonModule, ordersRouting.routes, SharedModule, PaginationModule ],
  declarations: [ ordersRouting.components ]
})
export class OrdersModule { }