import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FilterTextboxModule } from './filter-textbox/filter-textbox.module';
import { MapModule } from './map/map.module';
import { PaginationModule } from './pagination/pagination.module';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { SortByDirective } from './directives/sortby.directive';

@NgModule({
  imports: [CommonModule, MapModule, FilterTextboxModule, PaginationModule ],
  declarations: [ CapitalizePipe, TrimPipe, SortByDirective ],
  exports: [ CapitalizePipe, TrimPipe, SortByDirective,
             MapModule, FilterTextboxModule, PaginationModule,
             CommonModule, FormsModule, HttpModule ]
})
export class SharedModule { }
