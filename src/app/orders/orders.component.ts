import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink, RouteParams } from 'angular2/router';
import { DataService } from '../shared/services/data.service';

@Component({ 
  selector: 'orders',
  providers: [DataService],
  templateUrl: 'app/orders/orders.component.html',
  directives: [CORE_DIRECTIVES, RouterLink]
})
export class OrdersComponent {
	
	  title: string = 'Orders';
    filteredOrders: any[] = [];
  
    constructor(private dataService: DataService, private _routeParams: RouteParams) {
      
    }
    
    ngOnInit() {
      let customerId = parseInt(this._routeParams.get('id'), 10);
      this.dataService.getOrders().subscribe((orders: any[]) => {
        this.filteredOrders = orders.filter(order => order.customerId === customerId);
      });
    }
}
