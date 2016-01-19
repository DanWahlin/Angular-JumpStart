import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { CustomersComponent } from '../customers/customers.component';
import { OrdersComponent } from '../orders/orders.component';

@Component({ 
  selector: 'app-container',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/', as: 'Customers', component: CustomersComponent, useAsDefault: true },
  { path: '/orders/:id', as: 'Orders', component: OrdersComponent    }
])
export class AppComponent {

}
