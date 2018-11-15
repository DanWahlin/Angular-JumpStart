import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../../core/services/data.service';
import { ICustomer, IOrder, IOrderItem } from '../../shared/interfaces';

@Component({
  selector: 'cm-customer-orders',
  templateUrl: './customer-orders.component.html'
})
export class CustomerOrdersComponent implements OnInit {

  orders: IOrder[] = [];
  customer: ICustomer;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
      // Subscribe to params so if it changes we pick it up.  Could use this.route.parent.snapshot.params["id"] to simplify it.
      this.route.parent.params.subscribe((params: Params) => {
        const id = +params['id'];
        this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
          this.customer = customer;
        });
      });
  }

  ordersTrackBy(index: number, orderItem: any) {
    return index;
  }

}
