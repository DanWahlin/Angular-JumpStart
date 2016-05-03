import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './+customer/customer.component';
import { APP_PROVIDERS } from './app.providers';

@Component({ 
  moduleId: module.id,
  selector: 'app-container',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [ APP_PROVIDERS ]
})
@Routes([
  { path: '/', component: CustomersComponent },
  { path: '/customer/:id', component: CustomerComponent }
])
export class AppComponent {
  
  constructor(private router: Router) {

  }
  
}


//Dynamic loading (old router but coming to new router)
// { 
//   path: '/customers/:id/...', 
//   name: 'Customer',  
//   loader: () => window['System'].import('app/+customer')
//                 .then((module: any) => module.CustomerComponent) 
// }
