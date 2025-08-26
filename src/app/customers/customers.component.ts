import { Component, OnInit, ViewChild, 
  ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';

import { DataService } from '../core/services/data.service';
import { ICustomer, IPagedResults } from '../shared/interfaces';
import { FilterService } from '../core/services/filter.service';
import { LoggerService } from '../core/services/logger.service';
import { PaginationComponent } from '../shared/pagination/pagination.component';
import { CustomersGridComponent } from './customers-grid/customers-grid.component';
import { CustomersCardComponent } from './customers-card/customers-card.component';
import { FilterTextboxComponent } from '../shared/filter-textbox/filter-textbox.component';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'cm-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.css'],
    imports: [RouterLink, FilterTextboxComponent, CustomersCardComponent, CustomersGridComponent, PaginationComponent]
})
export class CustomersComponent implements OnInit {

  title: string = '';
  currentFilter: string = '';  // Track the actual filter value
  customers: ICustomer[] = [];
  displayMode: DisplayModeEnum = DisplayModeEnum.Card;
  displayModeEnum = DisplayModeEnum;
  totalRecords = 0;
  pageSize = 10;
  mapComponentRef: ComponentRef<any> = {} as ComponentRef<any>;
  _filteredCustomers: ICustomer[] = [];

  get filteredCustomers() {
    return this._filteredCustomers;
  }

  set filteredCustomers(value: ICustomer[]) {
    this._filteredCustomers = value;
    this.updateMapComponentDataPoints();
  }

  @ViewChild('mapsContainer', { read: ViewContainerRef }) 
  private mapsViewContainerRef: ViewContainerRef = {} as ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private dataService: DataService,
    private filterService: FilterService,
    private logger: LoggerService) { }

  ngOnInit() {
    console.log('CustomersComponent ngOnInit called');
    this.title = 'Customers';
    this.currentFilter = '';
    this.displayMode = DisplayModeEnum.Card;

    this.getCustomersPage(1);
  }

  changeDisplayMode(mode: DisplayModeEnum) {
      this.displayMode = mode;
  }

  pageChanged(page: number) {
    this.getCustomersPage(page);
  }

  getCustomersPage(page: number) {
    console.log('getCustomersPage called with page:', page);
    this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
        .subscribe({
          next: (response: IPagedResults<ICustomer[]>) => {
            console.log('Response received:', response);
            this.customers = this.filteredCustomers = response.results;
            this.totalRecords = response.totalRecords;
            console.log('Customers set to:', this.customers);
            console.log('Total records:', this.totalRecords);
          },
          error: (err: any) => {
            console.error('Error in getCustomersPage:', err);
            this.logger.log(err);
          },
          complete: () => this.logger.log('getCustomersPage() retrieved customers for page: ' + page)
        });
  }

  filterChanged(data: string) {
    console.log('filterChanged called with data:', data);
    console.log('Current customers array:', this.customers);
    this.currentFilter = data; // Store the current filter value
    if (data && this.customers) {
        data = data.toUpperCase();
        const props = ['firstName', 'lastName', 'city', 'state.name'];
        this.filteredCustomers = this.filterService.filter<ICustomer>(this.customers, data, props);
        console.log('Filtered customers:', this.filteredCustomers);
    } else {
      // Create new array reference to trigger OnPush change detection
      this.filteredCustomers = [...this.customers];
      console.log('No filter, using all customers:', this.filteredCustomers);
    }
  }

  async lazyLoadMapComponent() {
    this.changeDisplayMode(DisplayModeEnum.Map);
    if (!this.mapsViewContainerRef.length) {
      // Lazy load MapComponent
      const { MapComponent } = await import('../shared/map/map.component');
      console.log('Lazy loaded map component!');
      this.mapComponentRef = this.mapsViewContainerRef.createComponent(MapComponent);
      this.mapComponentRef.instance.zoom = 2;
      this.mapComponentRef.instance.dataPoints = this.filteredCustomers;
      this.mapComponentRef.instance.enabled = true;
    }
  }

  updateMapComponentDataPoints() {
    if (this.mapComponentRef && this.mapComponentRef.instance) {
      this.mapComponentRef.instance.dataPoints = this.filteredCustomers;
    }
  }

  deleteCustomer(customer: ICustomer) {
    console.log('deleteCustomer called for:', customer);
    if (this.dataService) {
      this.dataService.deleteCustomer(customer.id).subscribe({
        next: (result) => {
          console.log('Delete result from server:', result);
          if (result) {
            console.log('Customer deleted from server successfully');
            // Remove from local arrays
            const index = this.customers.findIndex(c => c.id === customer.id);
            console.log('Found customer at index:', index);
            if (index > -1) {
              this.customers.splice(index, 1);
              console.log('Customer removed from array, new length:', this.customers.length);
            }
            // Create new array reference to trigger OnPush change detection
            this.customers = [...this.customers];
            console.log('Calling filterChanged with:', this.currentFilter);
            this.filterChanged(this.currentFilter);
            console.log('After filterChanged, filteredCustomers:', this.filteredCustomers);
            this.updateMapComponentDataPoints();
          } else {
            console.error('Server returned false for delete operation');
          }
        },
        error: (err) => {
          console.error('Error deleting customer:', err);
        }
      });
    }
  }


}

enum DisplayModeEnum {
  Card = 0,
  Grid = 1,
  Map = 2
}
