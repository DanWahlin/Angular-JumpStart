import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrowlerComponent }  from './growler.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [ CommonModule, GrowlerComponent ],
  declarations: [ GrowlerComponent ]
})
export class GrowlerModule { }