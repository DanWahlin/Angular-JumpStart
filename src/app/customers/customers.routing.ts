import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomersCardComponent } from './customers-card.component';
import { CustomersGridComponent } from './customers-grid.component';
import { FilterTextboxComponent } from '../filterTextbox/filterTextbox.component';
import { IRouting } from '../shared/interfaces';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/customers' },
  { path: 'customers', component: CustomersComponent}
];

export const customersRouting: IRouting = {
  routes: RouterModule.forChild(routes),
  components: [ CustomersComponent, CustomersCardComponent, CustomersGridComponent, FilterTextboxComponent ]
};