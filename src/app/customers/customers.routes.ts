import { RouterConfig } from '@angular/router';

import { CustomersComponent } from './customers.component';

export const CustomersRoutes: RouterConfig = [
  { path: '', pathMatch:'full', redirectTo: '/customers' },
  { path: 'customers', component: CustomersComponent}
];