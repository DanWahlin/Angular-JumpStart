import { NgModule }      from '@angular/core';

import { aboutRouting } from './about.routing';

@NgModule({
  imports:      [ aboutRouting.routes ],
  declarations: [ aboutRouting.components ]
})
export class AboutModule { }