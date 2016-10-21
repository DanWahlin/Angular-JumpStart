import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { CustomerEditComponent } from './customer-edit.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CustomerEditComponent> {

  canDeactivate(
    component: CustomerEditComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> | boolean {

    console.log(`CustomerId: ${route.params['id']} URL: ${state.url}`);

    //Check with component to see if we're able to deactivate
    return component.canDeactivate();
  }
}