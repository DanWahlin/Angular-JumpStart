import { RouterModule, Routes } from '@angular/router';

import { customers_routes } from './customers/customers.routing';

export const APP_ROUTES: Routes = [
  ...customers_routes,
  { path: 'customers/:id', loadChildren: 'app/customer/customer.module'},
  { path: '**', pathMatch:'full', redirectTo: '/customers' } //catch any unfound routes and redirect to home page
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);
