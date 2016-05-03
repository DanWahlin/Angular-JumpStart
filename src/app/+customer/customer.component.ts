import { Component, OnInit } from '@angular/core';
import { Router, Routes, ROUTER_DIRECTIVES, 
         RouteSegment, OnActivate, RouteTree } from '@angular/router';

import { IOrder, IOrderItem } from '../shared/interfaces';
import { CustomerOrdersComponent } from './customerOrders.component';
import { CustomerDetailsComponent } from './customerDetails.component';
import { CustomerEditComponent } from './customerEdit.component';

@Component({ 
  moduleId: module.id,
  selector: 'orders',
  templateUrl: 'customer.component.html',
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path:'/orders',  component: CustomerOrdersComponent },
  {path:'/details', component: CustomerDetailsComponent },
  {path:'/edit', component: CustomerEditComponent }
])
export class CustomerComponent implements OnActivate {
  
    displayMode: CustomerDisplayModeEnum;
    displayModeEnum = CustomerDisplayModeEnum;
  
    constructor(private router: Router) { }
    
    routerOnActivate(current: RouteSegment, prev?: RouteSegment,
      currTree?: RouteTree, prevTree?: RouteTree) {
      var path = currTree.children(current)[0].stringifiedUrlSegments;
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
