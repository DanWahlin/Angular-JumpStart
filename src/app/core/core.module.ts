import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from './data.service';
import { Sorter } from './sorter.service';
import { TrackByService } from './trackby.service';
import { DialogService } from './dialog.service';
import { EnsureModuleLoadedOnceGuard } from '../shared/ensureModuleLoadedOnceGuard';
import { ValidationService } from './validation.service';
import { AuthService } from'./auth.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [],
  exports: [ CommonModule ],
  providers: [ DataService, Sorter, TrackByService, DialogService, ValidationService, AuthService ] // these should be singleton
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    //Ensure that CoreModule is only loaded into AppModule

  //Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }  

}



