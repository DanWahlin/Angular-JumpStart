import { Component } from '@angular/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router';

import { IOrder, IOrderItem } from '../shared/interfaces';
import { CustomerOrdersComponent } from './customerOrders.component';
import { CustomerDetailsComponent } from './customerDetails.component';

@Component({ 
  moduleId: __moduleName,
  selector: 'orders',
  templateUrl: 'customer.component.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/orders',  name: 'CustomerOrders',  component: CustomerOrdersComponent, useAsDefault: true },
  {path:'/details', name: 'CustomerDetails', component: CustomerDetailsComponent }
])
export class CustomerComponent {
  
    customerDetailsEnabled: boolean;
  
    constructor(private router: Router) { }
    
    ngOnInit() {
      if (this.router.currentInstruction.component.urlPath === 'details') {
        this.customerDetailsEnabled = true;
      }
    }
}
