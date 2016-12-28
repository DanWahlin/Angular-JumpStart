import { Component } from '@angular/core';

@Component({ 
  moduleId: module.id,
  selector: 'app-container',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>`
})
export class AppComponent {

}
