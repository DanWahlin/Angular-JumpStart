import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule }   from '../shared/shared.module';
import { customerRouting } from './customer.routing';

@NgModule({
  imports:      [ CommonModule, customerRouting.routes, SharedModule ],
  declarations: [ customerRouting.components ]
})
export default class AppModule { }