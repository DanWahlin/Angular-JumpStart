import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { ICustomer } from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';

@Component({
  selector: 'customer-details',
  templateUrl: 'app/customer/customerDetails.component.html',
  directives: [ RouterLink ],
  pipes: [ CapitalizePipe ]
})
export class CustomerDetailsComponent implements OnInit {

  customer: ICustomer;

  constructor(private _router: Router, private _dataService: DataService) { }

  ngOnInit() { 
      let instruction = this._router.root.currentInstruction;
      const id = +instruction.component.params['id'];
      this._dataService.getCustomer(id).subscribe((customer: ICustomer) => {
          this.customer = customer;
      });
  }

}