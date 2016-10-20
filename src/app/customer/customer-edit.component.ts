import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../core/services/data.service';
import { ICustomer, IState } from '../shared/interfaces';

@Component({
  moduleId: module.id,
  selector: 'customer-edit',
  templateUrl: 'customer-edit.component.html'
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
  sub: Subscription;
  
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private dataService: DataService) { }

  ngOnInit() {
      //Subscribe to params so if it changes we pick it up. Don't technically need that here
      //since param won't be changing while component is alive. 
      //Could use this.route.parent.snapshot.params["id"] to simplify it.

      this.route.parent.params.forEach((params: Params) => {
        let id = +params['id'];
        this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
          //Quick and dirty clone used in case user cancels out of form
          const cust = JSON.stringify(customer);
          this.customer = JSON.parse(cust);
        });
      });

      // Can also use standard subscribe() for the params observable
      // this.sub = this.route.parent.params.subscribe(params => {
      //   let id = +params['id'];
      //   this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      //     //Quick and dirty clone used in case user cancels out of form
      //     const cust = JSON.stringify(customer);
      //     this.customer = JSON.parse(cust);
      //   });
      // });

      // ngOnDestroy() {
      //   this.sub.unsubscribe();
      // }

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