import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../../app/core/services/data.service';
import { ICustomer, IOrder, IOrderItem } from '../shared/interfaces';

@Component({
  moduleId: module.id,
  selector: 'customer-orders',
  templateUrl: 'customerOrders.component.html'
})
export class CustomerOrdersComponent implements OnInit {

  filteredOrders: IOrder[] = [];
  customer: ICustomer;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    const id = +this.router.routerState.parent(this.route).snapshot.params['id'];
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