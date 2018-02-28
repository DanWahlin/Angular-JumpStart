import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  imports: [CustomersRoutingModule, SharedModule],
  declarations: [CustomersRoutingModule.components]
})
export class CustomersModule { }
