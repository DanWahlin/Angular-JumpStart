import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';

import { DataService } from '../../core/services/data.service';
import { ModalService, IModalContent } from '../../core/modal/modal.service';
import { ICustomer, IState } from '../../shared/interfaces';
import { GrowlerService, GrowlerMessageType } from '../../core/growler/growler.service';
import { LoggerService } from '../../core/services/logger.service';

@Component({
    selector: 'cm-customer-edit',
    templateUrl: './customer-edit.component.html',
    styleUrls: ['./customer-edit.component.css'],
    imports: [FormsModule]
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
  states: IState[] = [];
  errorMessage: string = '';
  deleteMessageEnabled: boolean = false;
  operationText = 'Insert';
  @ViewChild('customerForm', { static: true }) customerForm: NgForm = {} as NgForm;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private growler: GrowlerService,
    private modalService: ModalService,
    private logger: LoggerService) { }

  ngOnInit() {
    this.route.parent?.params.subscribe((params: Params) => {
      const id = +params['id'];
      if (id !== 0) {
        this.operationText = 'Update';
        this.getCustomer(id);
      }
    });

    this.dataService.getStates().subscribe((states: IState[]) => this.states = states);
  }


  getCustomer(id: number) {
    this.dataService.getCustomer(id).subscribe((customer: any) => {
      this.customer = customer;
      // If customer.state is a string (like "AZ"), convert it to a state object
      if (typeof this.customer.state === 'string' && this.states.length > 0) {
        const stateAbbr = this.customer.state as string;
        const matchingState = this.states.find(s => s.abbreviation === stateAbbr);
        if (matchingState) {
          this.customer.state = matchingState;
        }
      }
    });
  }

  submit() {
    if (this.customer.id === 0) {
      this.dataService.insertCustomer(this.customer)
        .subscribe({
          next: (insertedCustomer: ICustomer) => {
            if (insertedCustomer) {
              // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
              this.customerForm.form.markAsPristine();
              this.router.navigate(['/customers']);
            } else {
              const msg = 'Unable to insert customer';
              this.growler.growl(msg, GrowlerMessageType.Danger);
              this.errorMessage = msg;
            }
          },
          error: (err: any) => this.logger.log(err)
        });
    } else {
      this.dataService.updateCustomer(this.customer)
        .subscribe({
          next: (status: boolean) => {
            if (status) {
              // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
              this.customerForm.form.markAsPristine();
              this.growler.growl('Operation performed successfully.', GrowlerMessageType.Success);
              // this.router.navigate(['/customers']);
            } else {
              const msg = 'Unable to update customer';
              this.growler.growl(msg, GrowlerMessageType.Danger);
              this.errorMessage = msg;
            }
          },
          error: (err: any) => this.logger.log(err)
        });
    }
  }

  cancel(event: Event) {
    event.preventDefault();
    // Route guard will take care of showing modal dialog service if data is dirty
    this.router.navigate(['/customers']);
  }

  delete(event: Event) {
    event.preventDefault();
    this.dataService.deleteCustomer(this.customer.id)
      .subscribe({
        next: (status: boolean) => {
          if (status) {
            this.router.navigate(['/customers']);
          } else {
            this.errorMessage = 'Unable to delete customer';
          }
        },
        error: (err) => this.logger.log(err)
      });
  }


  canDeactivate(): Promise<boolean> | boolean {
    if (!this.customerForm.dirty) {
      return true;
    }

    // Dirty show display modal dialog to user to confirm leaving
    const modalContent: IModalContent = {
      header: 'Lose Unsaved Changes?',
      body: 'You have unsaved changes! Would you like to leave the page and lose them?',
      cancelButtonText: 'Cancel',
      OKButtonText: 'Leave'
    };
    return this.modalService.show(modalContent);
  }

}
