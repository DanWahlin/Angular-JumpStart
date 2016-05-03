import { Component, OnInit } from '@angular/core';
import { Router, RouteSegment, RouteTree, OnActivate } from '@angular/router';

import { DataService } from '../shared/services/data.service';
import { ICustomer, IOrder, IOrderItem } from '../shared/interfaces';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';

@Component({
  moduleId: module.id,
  selector: 'customer-orders',
  templateUrl: 'customerOrders.component.html',
  pipes: [ CapitalizePipe ]
})
export class CustomerOrdersComponent implements OnActivate {

  filteredOrders: IOrder[] = [];
  customer: ICustomer;

  constructor(private router: Router, private dataService: DataService) { }
  
  routerOnActivate(
      current: RouteSegment,
      prev?: RouteSegment,
      currTree?: RouteTree,
      prevTree?: RouteTree) {
      const id = +currTree.parent(current).getParam('id');
      this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
        this.filteredOrders = orders;
      });
      this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
        this.customer = customer;
      });
  }
  
  orderTrackBy(index: number, order: IOrderItem) {
    return order.id;
  }
  
  orderItemTrackBy(index: number, orderItem: any) {
    return orderItem.id;
  }

}