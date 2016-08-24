import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from './services/data.service';
import { Sorter } from './services/sorter';
import { TrackByService } from './services/trackby.service';
import { throwIfAlreadyLoaded } from './moduleImportGuard';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [CommonModule],
  providers: [DataService, Sorter, TrackByService] // these should be singleton
})
export class CoreModule { 
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }  
}



