import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/customers' },
    { path: 'customers/:id', data: { preload: true }, loadChildren: () => import('./customer/routes').then(m => m.CUSTOMER_ROUTES) },
    { path: 'customers', loadComponent: () => import('./customers/customers.component').then(m => m.CustomersComponent) },
    { path: 'orders', data: { preload: true }, loadComponent: () => import('./orders/orders.component').then(m => m.OrdersComponent) },
    { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
    { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
    { path: '**', pathMatch: 'full', redirectTo: '/customers' } // catch any unfound routes and redirect to home page
  ];