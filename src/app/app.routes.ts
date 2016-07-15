import { provideRouter, RouterConfig } from '@angular/router';

import { CustomersRoutes } from './customers/customers.routes';
import { CustomerRoutes } from './customer/customer.routes';

export const App_Routes: RouterConfig = [
  ...CustomersRoutes,
  ...CustomerRoutes,
  { path: '**', pathMatch:'full', redirectTo: '/customers' } //catch any unfound routes and redirect to home page
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(App_Routes)
];
