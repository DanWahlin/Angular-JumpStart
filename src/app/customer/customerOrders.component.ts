import { Component, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router';

import { DataService } from '../shared/services/data.service';
import { IOrder, IOrderItem } from '../shared/interfaces';

@Component({
  selector: 'customer-orders',
  templateUrl: 'app/customer/customerOrders.component.html'
})
export class CustomerOrdersComponent implements OnInit {

  filteredOrders: IOrder[] = [];

  constructor(private _router: Router, private _routeParams: RouteParams, private _dataService: DataService) { }

  ngOnInit() { 
      let instruction = this._router.root.currentInstruction;
      const id = +instruction.component.params['id'];
      this._dataService.getOrders().subscribe((orders: IOrder[]) => {
        this.filteredOrders = orders.filter(order => order.customerId === id);
      });
  }
  
  orderTrackBy(index: number, order: IOrderItem) {
    return order.id;
  }
  
  orderItemTrackBy(index: number, orderItem: any) {
    return orderItem.id;
  }

}