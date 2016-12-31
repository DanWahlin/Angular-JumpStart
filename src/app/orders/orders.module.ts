import { NgModule }      from '@angular/core';

import { SharedModule }   from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  imports:      [ SharedModule, OrdersRoutingModule ],
  declarations: [ OrdersRoutingModule.components ]
})
export class OrdersModule { }