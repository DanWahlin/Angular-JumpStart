import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { SortByDirective } from './directives/sortby.directive';
import { Sorter } from './utils/sorter';
import { TrackByService } from './services/trackby.service';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ CapitalizePipe, TrimPipe, SortByDirective ],
  exports:      [ CapitalizePipe, TrimPipe, SortByDirective, CommonModule, FormsModule, HttpModule ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ Sorter, TrackByService ]
    };
  }
}