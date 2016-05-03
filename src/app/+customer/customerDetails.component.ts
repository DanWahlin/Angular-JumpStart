import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, RouteSegment, RouteTree, OnActivate } from '@angular/router';

import { ICustomer } from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';

@Component({
  moduleId: module.id,
  selector: 'customer-details',
  templateUrl: 'customerDetails.component.html',
  directives: [ ROUTER_DIRECTIVES ],
  pipes: [ CapitalizePipe ]
})
export class CustomerDetailsComponent implements OnActivate {

  customer: ICustomer;

  constructor(private router: Router, private dataService: DataService) { }

  routerOnActivate(current: RouteSegment, prev?: RouteSegment,
      currTree?: RouteTree, prevTree?: RouteTree) {
      const id = +currTree.parent(current).getParam('id');
      this.dataService.getCustomer(id)
          .subscribe((customer: ICustomer) => this.customer = customer);
  }
}