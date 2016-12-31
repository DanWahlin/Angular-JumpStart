import { NgModule }      from '@angular/core';

import { SharedModule }   from '../shared/shared.module';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { CanActivateGuard } from './can-activate.guard';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  imports:      [ CustomerRoutingModule, SharedModule ],
  declarations: [ CustomerRoutingModule.components ]
})
export class CustomerModule { }