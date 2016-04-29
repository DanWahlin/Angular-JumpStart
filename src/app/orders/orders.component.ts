import { Component } from '@angular/core';
import { RouterLink, RouteParams } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { IOrder, IOrderItem } from '../shared/interfaces';

@Component({ 
  selector: 'orders',
  providers: [DataService],
  templateUrl: 'app/orders/orders.component.html',
  directives: [RouterLink]
})
export class OrdersComponent {
	
	title: string = 'Orders';
    filteredOrders: IOrder[] = [];
  
    constructor(private dataService: DataService, private _routeParams: RouteParams) {
      
    }
    
    ngOnInit() {
      let customerId = parseInt(this._routeParams.get('id'), 10);
      this.dataService.getOrders().subscribe((orders: IOrder[]) => {
        this.filteredOrders = orders.filter(order => order.customerId === customerId);
      });
    }
    
    orderTrackBy(index: number, order: IOrderItem) {
      return order.id;
    }
    
    orderItemTrackBy(index: number, orderItem: any) {
      return orderItem.id;
    }
}
