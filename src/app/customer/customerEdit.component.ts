import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../shared/services/data.service';
import { ICustomer } from '../shared/interfaces';

@Component({
  selector: 'customer-edit',
  templateUrl: 'app/customer/customerEdit.component.html'
})
export class CustomerEditComponent implements OnInit {

  customer: ICustomer = 
  {
    id: 0,
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    city: '',
    state: {
        abbreviation: '',
        name: ''
    }
  };
  
  constructor(private _router: Router, private _dataService: DataService) { }

  ngOnInit() { 
      let instruction = this._router.root.currentInstruction;
      const id = +instruction.component.params['id'];
      this._dataService.getCustomer(id).subscribe((customer: ICustomer) => {
          this.customer = customer;
      });
  }
  
  onSubmit() {
    		this._dataService.updateCustomer(this.customer)
          .subscribe((status: boolean) => {
            this._router.navigate(['Customers']);
        });
  }

}