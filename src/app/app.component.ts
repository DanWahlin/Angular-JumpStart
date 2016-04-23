import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { APP_PROVIDERS } from './app.providers';

@Component({ 
  selector: 'app-container',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [ APP_PROVIDERS ]
})
@RouteConfig([
  { path: '/', name: 'Customers', component: CustomersComponent, useAsDefault: true },
  { path: '/orders/:id', name: 'Orders', component: OrdersComponent    }
])
export class AppComponent {
  
  constructor() {

  }
  
}
