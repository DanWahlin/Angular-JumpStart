import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({ 
  moduleId: module.id,
  selector: 'app-container',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {

}
