import { Component, View, NgFor } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { DataService } from '../../services/data-service';

@Component({ 
  selector: 'orders',
  providers: [DataService],
  templateUrl: 'app/components/orders/orders-component.html',
  directives: [NgFor, RouterLink]
})
export class OrdersComponent {
	
	title: string = 'Orders';
	
    constructor(private dataService: DataService) {

    }
    
    onInit() {
      //Load orders here (hard-coded for now)
    }
}
