import { Component } from '@angular/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router';

import { IOrder, IOrderItem } from '../shared/interfaces';
import { CustomerOrdersComponent } from './customerOrders.component';
import { CustomerDetailsComponent } from './customerDetails.component';
import { CustomerEditComponent } from './customerEdit.component';

@Component({ 
  moduleId: __moduleName,
  selector: 'orders',
  templateUrl: 'customer.component.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/orders',  name: 'CustomerOrders',  component: CustomerOrdersComponent, useAsDefault: true },
  {path:'/details', name: 'CustomerDetails', component: CustomerDetailsComponent },
  {path:'/edit', name: 'CustomerEdit', component: CustomerEditComponent }
])
export class CustomerComponent {
  
    displayMode: CustomerDisplayModeEnum;
    displayModeEnum = CustomerDisplayModeEnum;
  
    constructor(private router: Router) { }
    
    ngOnInit() {
      var path = this.router.currentInstruction.component.urlPath;
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
