import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
  { path: 'customers/:id', data: { preload: true }, loadChildren: () => import('app/customer/customer.module').then(m => m.CustomerModule) },
  { path: 'customers', loadChildren: () => import('app/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', data: { preload: true }, loadChildren: () => import('app/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'about', loadChildren: () => import('app/about/about.module').then(m => m.AboutModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/customers' } // catch any unfound routes and redirect to home page

  // NOTE: If you're using Angular 7 or lower you'll lazy loads routes the following way
  
  // { path: 'customers/:id', data: { preload: true }, loadChildren: 'app/customer/customer.module#CustomerModule' },
  // { path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule' },
  // { path: 'orders', data: { preload: true }, loadChildren: 'app/orders/orders.module#OrdersModule' },
  // { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },

];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadModulesStrategy }) ],
  exports: [ RouterModule ],
  providers: [PreloadModulesStrategy]
})
export class AppRoutingModule { }
