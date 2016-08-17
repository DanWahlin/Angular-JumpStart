import { Routes} from '@angular/router';

import { CustomersComponent } from './customers.component';

export const CUSTOMERS_ROUTES: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/customers' },
  { path: 'customers', component: CustomersComponent}
];