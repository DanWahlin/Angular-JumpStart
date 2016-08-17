import { RouterModule, Routes } from '@angular/router';

import { CUSTOMERS_ROUTES } from './customers/customers.routing';

export const APP_ROUTES: Routes = [
  ...CUSTOMERS_ROUTES,
  { path: 'customers/:id', loadChildren: 'app/customer/customer.module'},
  { path: '**', pathMatch:'full', redirectTo: '/customers' } //catch any unfound routes and redirect to home page
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
