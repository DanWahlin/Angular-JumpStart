import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { IRouting } from '../shared/interfaces';

const routes: Routes = [
  { path: 'orders', component: OrdersComponent }
];

export const ordersRouting: IRouting = {
  routes: RouterModule.forChild(routes),
  components: [ OrdersComponent ]
};