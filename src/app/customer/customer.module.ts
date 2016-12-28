import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }   from '../shared/shared.module';
import { MapModule } from '../map/map.module';
import { GrowlerModule } from '../growler/growler.module';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { customerRouting } from './customer.routing';

@NgModule({
  imports:      [ CommonModule, customerRouting.routes, SharedModule, MapModule, GrowlerModule ],
  declarations: [ customerRouting.components ],
  providers: [ CanDeactivateGuard ]
})
export class CustomerModule { }