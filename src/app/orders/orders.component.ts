import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouterLink } from 'angular2/router';
import { DataService } from '../shared/services/data.service';

@Component({ 
  selector: 'orders',
  providers: [DataService],
  templateUrl: 'app/orders/orders.component.html',
  directives: [CORE_DIRECTIVES, RouterLink]
})
export class OrdersComponent {
	
	  title: string = 'Orders';
	
    constructor(private dataService: DataService) {

    }
    
    ngOnInit() {
      //Load orders here (hard-coded for now)
    }
}
