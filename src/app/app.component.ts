import { Component } from '@angular/core';

@Component({ 
  moduleId: module.id,
  selector: 'app-container',
  template: `
    <main class="container">
      <navbar></navbar>
      <router-outlet></router-outlet>
      <br /><br />
    </main>
  `
})
export class AppComponent {

}
