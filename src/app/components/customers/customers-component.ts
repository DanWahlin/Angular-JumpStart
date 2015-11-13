import { Component, View, NgFor, NgClass } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { DataService } from '../../services/data-service';
import { Sorter } from '../../utils/sorter';
import { FilterTextboxComponent } from '../filter-textbox/filter-textbox-component';
import { SortByDirective } from '../../directives/sortby/sortby-directive';
import { CapitalizePipe } from '../../pipes/capitalize-pipe';

@Component({ 
  selector: 'customers', 
  providers: [DataService],
  templateUrl: 'app/components/customers/customers-component.html',
  directives: [RouterLink, NgFor, FilterTextboxComponent, SortByDirective, NgClass],
  pipes: [CapitalizePipe]
})
export class CustomersComponent {

  title: string;
  filterText: string;
  listDisplayModeEnabled: boolean;
  customers: any[];
  filteredCustomers: any[];
  sorter: Sorter;

  constructor(private dataService: DataService) { }
  
  onInit() {
    this.title = 'Customers';
    this.filterText = 'Filter Customers:';
    this.listDisplayModeEnabled = false;
    this.customers = this.filteredCustomers = [];

    this.dataService.customers
        .subscribe((customers:any[]) => this.customers = this.filteredCustomers = customers);

    this.sorter = new Sorter();
  }

  changeDisplayMode(mode: string) {
      this.listDisplayModeEnabled = (mode === 'List');
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


