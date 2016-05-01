import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../shared/services/data.service';
import { ICustomer, IState } from '../shared/interfaces';

@Component({
  moduleId: __moduleName,
  selector: 'customer-edit',
  templateUrl: 'customerEdit.component.html'
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
  states: IState[];
  
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() { 
      let instruction = this.router.root.currentInstruction;
      const id = +instruction.component.params['id'];
      this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
        //Quick and dirty clone used in case user cancels out of form
        const cust = JSON.stringify(customer);
        this.customer = JSON.parse(cust);
      });
      this.dataService.getStates().subscribe((states: IState[]) => this.states = states);
  }
  
  onSubmit() {
      this.dataService.updateCustomer(this.customer)
        .subscribe((status: boolean) => {
          this.router.navigate(['/Customers']);
      });
  }
  
  onCancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/Customers']);
  }

}