import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteConfig } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';
import { APP_PROVIDERS } from './app.providers';

@Component({ 
  moduleId: __moduleName,
  selector: 'app-container',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [ APP_PROVIDERS ]
})
@RouteConfig([
  { path: '/', name: 'Customers', component: CustomersComponent, useAsDefault: true },
  { 
    path: '/customers/:id/...', 
    name: 'Customer',  
    loader: () => window['System'].import('app/+customer')
                  .then((module: any) => module.CustomerComponent) 
  },
  { path: '/**', redirectTo: ['Customers']}
])
export class AppComponent {
  
  constructor() {

  }
  
}
