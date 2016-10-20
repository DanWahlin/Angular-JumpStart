import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/services/data.service';

@Component({
  moduleId: module.id,
  selector: 'customer-details',
  templateUrl: 'customer-details.component.html'
})
export class CustomerDetailsComponent implements OnInit {

  customer: ICustomer;
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
      //Subscribe to params so if it changes we pick it up. Don't technically need that here
      //since param won't be changing while component is alive. Could use this.route.parent.snapshot.params["id"] to simplify it.
      this.route.parent.params.forEach((params: Params) => {
        let id = +params['id'];
        this.dataService.getCustomer(id)
            .subscribe((customer: ICustomer) => this.customer = customer);
      });
  }


}