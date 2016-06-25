import { Component, OnInit } from '@angular/core';
import { Router,  ROUTER_DIRECTIVES } from '@angular/router';

@Component({ 
  moduleId: module.id,
  selector: 'orders',
  templateUrl: 'customer.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class CustomerComponent implements OnInit {
  
    displayMode: CustomerDisplayModeEnum;
    displayModeEnum = CustomerDisplayModeEnum;
  
    constructor(private router: Router) { }

    ngOnInit() {
      //Next line needs a better technique. This is the easiest way
      //to get child route path that I've found so far.
      //Hoping this will be easier with later builds of router
      const path = this.router.url.split('/')[3];
      switch (path) {
        case 'details':
          this.displayMode = CustomerDisplayModeEnum.Details;
          break;
        case 'orders':
          this.displayMode = CustomerDisplayModeEnum.Orders;
          break;
        case 'edit':
          this.displayMode = CustomerDisplayModeEnum.Edit;
          break;
      }
    }

}

enum CustomerDisplayModeEnum {
  Details=0,
  Orders=1,
  Edit=2
}
