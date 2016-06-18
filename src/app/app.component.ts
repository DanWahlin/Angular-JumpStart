import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { APP_PROVIDERS } from './app.providers';

@Component({ 
  moduleId: module.id,
  selector: 'app-container',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [ APP_PROVIDERS ]
})
export class AppComponent {
  
  constructor() {

  }
  
}


//Dynamic loading (old router but coming to new router)
// { 
//   path: '/customers/:id/...', 
//   name: 'Customer',  
//   loader: () => window['System'].import('app/+customer')
//                 .then((module: any) => module.CustomerComponent) 
// }
