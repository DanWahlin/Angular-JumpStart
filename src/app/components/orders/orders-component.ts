import { Component, View, NgFor } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { DataService } from '../../services/data-service';

@Component({ 
  selector: 'orders',
  templateUrl: 'app/components/orders/orders-component.html',
  directives: [NgFor, RouterLink]
})
export class OrdersComponent {
	
	title: string = 'Orders';
	
    constructor(dataService: DataService) {
      //this.orders = dataService.getOrders();
    }
}
