import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationComponent } from './pagination.component';

@NgModule({
  imports: [CommonModule],
  exports: [PaginationComponent],
  declarations: [PaginationComponent]
})
export class PaginationModule { }
