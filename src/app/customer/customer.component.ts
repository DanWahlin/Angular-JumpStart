import { Component } from '@angular/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from '@angular/router';

import { IOrder, IOrderItem } from '../shared/interfaces';
import { CustomerOrdersComponent } from './customerOrders.component';
import { CustomerDetailsComponent } from './customerDetails.component';

@Component({ 
  selector: 'orders',
  templateUrl: 'app/customer/customer.component.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/orders',  name: 'CustomerOrders',  component: CustomerOrdersComponent, useAsDefault: true },
  {path:'/details', name: 'CustomerDetails', component: CustomerDetailsComponent }
])
export class CustomerComponent {
  
    customerDetailsEnabled: boolean;
  
    constructor(private _router: Router) { }
    
    ngOnInit() {
      if (this._router.currentInstruction.component.urlPath === 'details') {
        this.customerDetailsEnabled = true;
      }
    }
}
