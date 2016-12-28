import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationComponent }  from './pagination.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [ CommonModule, PaginationComponent ],
  declarations: [ PaginationComponent ]
})
export class PaginationModule { }