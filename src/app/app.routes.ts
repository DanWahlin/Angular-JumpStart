import { provideRouter, RouterConfig } from '@angular/router';

import { CustomersRoutes } from './customers/customers.routes';
import { CustomerRoutes } from './+customer/customer.routes';

const appRoutes: RouterConfig = [
  ...CustomersRoutes,
  ...CustomerRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(appRoutes)
];