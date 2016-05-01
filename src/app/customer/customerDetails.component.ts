import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { ICustomer } from '../shared/interfaces';
import { DataService } from '../shared/services/data.service';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';

@Component({
  moduleId: __moduleName,
  selector: 'customer-details',
  templateUrl: 'customerDetails.component.html',
  directives: [ RouterLink ],
  pipes: [ CapitalizePipe ]
})
export class CustomerDetailsComponent implements OnInit {

  customer: ICustomer;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() { 
      let instruction = this.router.root.currentInstruction;
      const id = +instruction.component.params['id'];
      this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
          this.customer = customer;
      });
  }

}