import { Component, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router';

import { DataService } from '../shared/services/data.service';
import { ICustomer, IOrder, IOrderItem } from '../shared/interfaces';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';

@Component({
  moduleId: __moduleName,
  selector: 'customer-orders',
  templateUrl: 'customerOrders.component.html',
  pipes: [ CapitalizePipe ]
})
export class CustomerOrdersComponent implements OnInit {

  filteredOrders: IOrder[] = [];
  customer: ICustomer;

  constructor(private router: Router, private routeParams: RouteParams, private dataService: DataService) { }

  ngOnInit() { 
      let instruction = this.router.root.currentInstruction;
      const id = +instruction.component.params['id'];
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