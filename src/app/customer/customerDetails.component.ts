import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ICustomer } from '../shared/interfaces';
import { DataService } from '../../app/core/services/data.service';

@Component({
  moduleId: module.id,
  selector: 'customer-details',
  templateUrl: 'customerDetails.component.html'
})
export class CustomerDetailsComponent implements OnInit {

  customer: ICustomer;
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
      //Subscribe to params so if it changes we pick it up. Don't technically need that here
      //since param won't be changing while component is alive. Could use this.route.snapshot.parent.params["id"] to simplify it.
      this.sub = this.route.parent.params.subscribe(params => {
        let id = +params['id'];
        this.dataService.getCustomer(id)
            .subscribe((customer: ICustomer) => this.customer = customer);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}