import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }   from '../shared/shared.module';
import { customersRouting } from './customers.routing';
import { MapModule } from '../map/map.module';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  imports:      [ CommonModule, customersRouting.routes, SharedModule, MapModule, PaginationModule ],
  declarations: [ customersRouting.components ]
})
export class CustomersModule { }