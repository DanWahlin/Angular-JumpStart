import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';

const customers_routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/customers' },
  { path: 'customers', component: CustomersComponent}
];

export const customers_routing = RouterModule.forChild(customers_routes);