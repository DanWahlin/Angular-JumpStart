import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerEditComponent } from './customer/customerEdit.component';
import { APP_PROVIDERS } from './app.providers';

@Component({ 
  selector: 'app-container',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [ APP_PROVIDERS ]
})
@RouteConfig([
  { path: '/', name: 'Customers', component: CustomersComponent, useAsDefault: true },
  { path: '/customers/:id/...', name: 'Customer', component: CustomerComponent },
  { path: '/customers/:id/edit', name: 'CustomerEdit', component: CustomerEditComponent },
  { path: '/**', redirectTo: ['Customers']}
])
export class AppComponent {
  
  constructor() {

  }
  
}
