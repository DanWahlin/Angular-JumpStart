import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ICustomer } from '../shared/interfaces';
import { DataService } from '../../app/core/services/data.service';

@Component({
  moduleId: module.id,
  selector: 'customer-details',
  templateUrl: 'customerDetails.component.html'
})
export class CustomerDetailsComponent implements OnInit {

  customer: ICustomer;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
      const id = +this.router.routerState.parent(this.route).snapshot.params['id'];
      this.dataService.getCustomer(id)
          .subscribe((customer: ICustomer) => this.customer = customer);
  }
}