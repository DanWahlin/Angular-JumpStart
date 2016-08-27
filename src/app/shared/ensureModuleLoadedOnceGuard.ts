import { BaseException } from '@angular/core';

export class EnsureModuleLoadedOnceGuard {

  constructor(targetModule: any) {
    if (targetModule) {
      throw new BaseException(`${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
    }
  }

}