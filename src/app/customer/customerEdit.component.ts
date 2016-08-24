import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../../app/core/services/data.service';
import { ICustomer, IState } from '../shared/interfaces';

@Component({
  moduleId: module.id,
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
  errorMessage: string;
  
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private dataService: DataService) { }

  ngOnInit() {
      const id = +this.router.routerState.parent(this.route).snapshot.params['id'];
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
          if (status) {
            this.router.navigate(['/']);
          }
          else {
            this.errorMessage = 'Unable to save customer';
          }
      });
  }
  
  onCancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/']);
  }

}