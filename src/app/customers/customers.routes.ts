import { RouterConfig } from '@angular/router';

import { CustomersComponent } from './customers.component';

export const CustomersRoutes: RouterConfig = [
  { path: '', terminal: true, redirectTo: '/customers' },
  { path: 'customers', component: CustomersComponent}
];