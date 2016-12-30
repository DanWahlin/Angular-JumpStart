import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { aboutRouting } from './about.routing';

@NgModule({
  imports:      [ CommonModule, aboutRouting.routes ],
  declarations: [ aboutRouting.components ]
})
export class AboutModule { }