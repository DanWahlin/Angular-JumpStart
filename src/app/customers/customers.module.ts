import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }   from '../shared/shared.module';
import { customersRouting } from './customers.routing';
import { MapModule } from '../map/map.module';

@NgModule({
  imports:      [ CommonModule, customersRouting.routes, SharedModule, MapModule ],
  declarations: [ customersRouting.components ]
})
export class CustomersModule { }