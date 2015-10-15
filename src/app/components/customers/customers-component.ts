import { Component, View, NgFor } from 'angular2/angular2';
import { ObservableWrapper } from 'angular2/src/core/facade/async';
import { DataService } from '../../services/data-service';
import { Sorter } from '../../utils/sorter';
import { FilterTextboxComponent } from '../filter-textbox/filter-textbox-component';
import { SortByDirective } from '../../directives/sortby/sortby-directive';
import { CurrencyPipe } from '../../pipes/currency-pipe';

@Component({ 
  selector: 'customers', 
  providers: [DataService],
  templateUrl: 'app/components/customers/customers-component.html',
  directives: [NgFor, FilterTextboxComponent, SortByDirective],
  pipes: [CurrencyPipe]
})
export class CustomersComponent {

  title: string;
  filterText: string;
  listDisplayModeEnabled: boolean;
  customers: any[];
  filteredCustomers: any[];
  sorter: Sorter;

  constructor(private _dataService: DataService) {
    this.title = 'Customers';
    this.filterText = 'Filter Customers:';
    this.listDisplayModeEnabled = false;
    this.customers = this.filteredCustomers = [];

    _dataService.customers
       .subscribe(customers => this.customers = this.filteredCustomers = customers);

    this.sorter = new Sorter();
  }

  changeDisplayMode(mode) {
      //Removed DisplayMode enum due to error in 42...will look into it later
      switch (mode) {
          case 'Card':
              this.listDisplayModeEnabled = false;
              break;
          case 'List':
              this.listDisplayModeEnabled = true;
              break;
      }
  }

  filterChanged(data: string) {
    if (data) {
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
      this.sorter.sort(this.filteredCustomers, prop);
  }

}

export enum DisplayMode { Card, List }


