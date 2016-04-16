import { Component } from 'angular2/core';
import { RouterLink } from 'angular2/router';
//import { Observable } from 'rxjs/Observable';

import { DataService } from '../shared/services/data.service';
import { Sorter } from '../shared/sorter';
import { FilterTextboxComponent } from './filterTextbox.component';
import { SortByDirective } from '../shared/directives/sortby.directive';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';
import { TrimPipe } from '../shared/pipes/trim.pipe';
import { ICustomer, IOrder } from '../shared/interfaces';

@Component({ 
  selector: 'customers', 
  providers: [DataService],
  templateUrl: 'app/customers/customers.component.html',
  directives: [RouterLink, FilterTextboxComponent, SortByDirective],
  pipes: [CapitalizePipe, TrimPipe]
})
export class CustomersComponent {

  title: string;
  filterText: string;
  listDisplayModeEnabled: boolean;
  customers: ICustomer[] = [];
  filteredCustomers: ICustomer[] = [];
  sorter: Sorter;

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.title = 'Customers';
    this.filterText = 'Filter Customers:';
    this.listDisplayModeEnabled = false;

    this.dataService.getCustomers()
        .subscribe((customers: ICustomer[]) => {
          this.customers = this.filteredCustomers = customers;
        });

    this.sorter = new Sorter();
  }

  changeDisplayMode(mode: string) {
      this.listDisplayModeEnabled = (mode === 'List');
  }

  filterChanged(data: string) {
    if (data && this.customers) {
        data = data.toUpperCase();
        let props = ['firstName', 'lastName', 'address', 'city', 'orderTotal'];
        let filtered = this.customers.filter(item => {
            let match = false;
            for (let prop of props) {
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

  deleteCustomer(id: number) {

  }

  sort(prop: string) {
      //Check for complex type such as 'state.name'
      if (prop && prop.indexOf('.')) {
        
      }
      this.sorter.sort(this.filteredCustomers, prop);
  }
  
  customerTrackBy(index: number, customer: any) {
    return customer.id;
  }

}
