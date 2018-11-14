import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrowlerComponent } from './growler.component';
import { GrowlerService } from './growler.service';
import { EnsureModuleLoadedOnceGuard } from '../ensure-module-loaded-once.guard';

@NgModule({
  imports: [CommonModule],
  exports: [GrowlerComponent],
  providers: [GrowlerService],
  declarations: [GrowlerComponent]
})
export class GrowlerModule extends EnsureModuleLoadedOnceGuard {    // Ensure that GrowlerModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: GrowlerModule) {
    super(parentModule);
  }
}
