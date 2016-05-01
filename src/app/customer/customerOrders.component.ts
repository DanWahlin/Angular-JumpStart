import { Component, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router';

import { DataService } from '../shared/services/data.service';
import { ICustomer, IOrder, IOrderItem } from '../shared/interfaces';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';

@Component({
  selector: 'customer-orders',
  templateUrl: 'app/customer/customerOrders.component.html',
  pipes: [ CapitalizePipe ]
})
export class CustomerOrdersComponent implements OnInit {

  filteredOrders: IOrder[] = [];
  customer: ICustomer;

  constructor(private _router: Router, private _routeParams: RouteParams, private _dataService: DataService) { }

  ngOnInit() { 
      let instruction = this._router.root.currentInstruction;
      const id = +instruction.component.params['id'];
      this._dataService.getOrders(id).subscribe((orders: IOrder[]) => {
        this.filteredOrders = orders;
      });
      this._dataService.getCustomer(id).subscribe((customer: ICustomer) => {
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