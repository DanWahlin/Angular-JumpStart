import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from './services/data.service';
import { Sorter } from './services/sorter';
import { TrackByService } from './services/trackby.service';

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


// john;s crappy idea is below
import { BaseException } from '@angular/core';

export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new ModuleImportGuardException(moduleName);
  }
}

class ModuleImportGuardException extends BaseException {
  constructor(name: string) {
    super(`${name} has already been loaded. Import Core modules in the AppModule only.`);
  }
}
