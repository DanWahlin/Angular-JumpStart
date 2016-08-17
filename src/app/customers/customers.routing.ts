import { Routes} from '@angular/router';

import { CustomersComponent } from './customers.component';

export const customers_routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/customers' },
  { path: 'customers', component: CustomersComponent}
];