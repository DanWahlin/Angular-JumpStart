import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

import { DataService } from '../core/services/data.service';
import { DialogService } from '../core/services/dialog.service';
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
  @ViewChild('customerForm') customerForm: NgForm;
  
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private dataService: DataService,
              public dialogService: DialogService) { }

  ngOnInit() {
      //Subscribe to params so if it changes we pick it up. Don't technically need that here
      //since param won't be changing while component is alive. 
      //Could use this.route.parent.snapshot.params["id"] to simplify it.
      this.route.parent.params.subscribe((params: Params) => {
        let id = +params['id'];
        this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
          //Quick and dirty clone used in case user cancels out of form
          const cust = JSON.stringify(customer);
          this.customer = JSON.parse(cust);
        });
      });

      this.dataService.getStates().subscribe((states: IState[]) => this.states = states);
  }

  
  onSubmit() {
      this.dataService.updateCustomer(this.customer)
        .subscribe((status: boolean) => {
          if (status) {
            //Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
            this.customerForm.form.markAsPristine();
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

    //Route guard will take care of dialog service so this isn't needed now
    // this.dialogService.confirm('Lose unsaved changes?').then((leave: boolean) => {
    //   if (leave) {
    //     this.router.navigate(['/']);
    //   }
    // });
  }

  canDeactivate(): Promise<boolean> | boolean {
    if (!this.customerForm.dirty) {
      return true;
    }
    return this.dialogService.confirm('Discard form changes?');
  }

}