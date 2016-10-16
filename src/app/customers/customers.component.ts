import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Observable';

import { DataService } from '../../app/core/services/data.service';
import { ICustomer } from '../shared/interfaces';
import { propertyResolver } from '../shared/property-resolver';

@Component({ 
  moduleId: module.id,
  selector: 'customers', 
  templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit {

  title: string;
  filterText: string;
  customers: ICustomer[] = [];
  filteredCustomers: ICustomer[] = [];
  displayMode: DisplayModeEnum;
  displayModeEnum = DisplayModeEnum;

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.title = 'Customers';
    this.filterText = 'Filter Customers:';
    this.displayMode = DisplayModeEnum.Card;

    this.dataService.getCustomers()
        .subscribe((customers: ICustomer[]) => {
          this.customers = this.filteredCustomers = customers;
        });

  }

  changeDisplayMode(mode: DisplayModeEnum) {
      this.displayMode = mode;
  }


  filterChanged(data: string) {
    if (data && this.customers) {
        data = data.toUpperCase();
        let props = ['firstName', 'lastName', 'address', 'city', 'state.name', 'orderTotal'];
        let filtered = this.customers.filter(item => {
            let match = false;
            for (let prop of props) {
                if (prop.indexOf('.') > -1) {
                   var value = propertyResolver.resolve(prop, item);
                   if (value && value.toUpperCase().indexOf(data) > -1) {
                      match = true;
                      break;
                   }
                   continue;
                }
                
                //console.log(item[prop] + ' ' + item[prop].toUpperCase().indexOf(data));
                if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                  match = true;
                  break;
                }
            };
            return match;
        });
        this.filteredCustomers = filtered;
    }
    else {
      this.filteredCustomers = this.customers;
    }
  }
}

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}
