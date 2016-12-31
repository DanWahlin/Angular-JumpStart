import { RouterModule, Routes } from '@angular/router';

const app_routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/customers' },
  { path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule'},
  { path: 'customers/:id', loadChildren: 'app/customer/customer.module#CustomerModule'},
  { path: 'orders', loadChildren: 'app/orders/orders.module#OrdersModule'},
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule'},
  { path: '**', pathMatch:'full', redirectTo: '/customers' } //catch any unfound routes and redirect to home page
];

export const app_routing = RouterModule.forRoot(app_routes);
