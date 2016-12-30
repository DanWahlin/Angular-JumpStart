import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import { ICustomer, IPagedResults } from '../shared/interfaces';
import { TrackByService } from '../core/trackby.service';

@Component({
    moduleId: module.id,
    selector: 'customers-orders',
    templateUrl: 'orders.component.html'
})
export class OrdersComponent implements OnInit {

    customers: ICustomer[];
    totalRecords: number = 0;
    pageSize: number = 10;

    constructor(private dataservice: DataService, private trackbyService: TrackByService) { }

    ngOnInit() {
        this.getCustomersPage(1);
    }

    pageChanged(page: number) {
        this.getCustomersPage(page);
    }

    getCustomersPage(page: number) {
        this.dataservice.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe((response: IPagedResults<ICustomer[]>) => {
                this.totalRecords = response.totalRecords;
                this.customers = response.results;
            });
    }

}