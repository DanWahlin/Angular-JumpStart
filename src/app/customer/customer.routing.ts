import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent }   from './customer.component';
import { CustomerOrdersComponent } from './customer-orders.component';
import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerEditComponent } from './customer-edit.component';
import { CanActivateGuard } from './can-activate.guard';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { IRouting } from '../shared/interfaces';

const routes: Routes = [
  { 
    path: '', 
    component: CustomerComponent,
    children: [
      { path:'orders',  component: CustomerOrdersComponent },
      { path:'details', component: CustomerDetailsComponent },
      { path:'edit', 
        component: CustomerEditComponent,  
        canActivate: [ CanActivateGuard ],
        canDeactivate: [ CanDeactivateGuard ] 
      }
    ]
  }
];

export const customerRouting: IRouting = {
  routes: RouterModule.forChild(routes),
  components: [ CustomerComponent, CustomerOrdersComponent, CustomerDetailsComponent, CustomerEditComponent]
};

