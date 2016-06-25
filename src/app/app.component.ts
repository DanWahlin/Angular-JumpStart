import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { APP_PROVIDERS } from './app.providers';

@Component({ 
  moduleId: module.id,
  selector: 'app-container',
  template: `<router-outlet></router-outlet>`,
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ APP_PROVIDERS ]
})
export class AppComponent {
  
  
}
