import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { OverlayRequestResponseInterceptor } from './overlay-request-response.interceptor';
import { OverlayComponent } from './overlay.component';
import { EnsureModuleLoadedOnceGuard } from '../ensure-module-loaded-once.guard';


@NgModule({
  imports: [CommonModule],
  exports: [OverlayComponent],
  declarations: [OverlayComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OverlayRequestResponseInterceptor,
      multi: true,
    }
  ]
})
export class OverlayModule extends EnsureModuleLoadedOnceGuard {    // Ensure that OverlayModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: OverlayModule) {
    super(parentModule);
  }
}
