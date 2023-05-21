import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/services/data.service';
import { ICustomer, IPagedResults } from '../shared/interfaces';
import { TrackByService } from '../core/services/trackby.service';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';
import { PaginationComponent } from '../shared/pagination/pagination.component';
import { NgIf, NgFor, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'cm-customers-orders',
    templateUrl: './orders.component.html',
    standalone: true,
    imports: [NgIf, NgFor, PaginationComponent, CurrencyPipe, CapitalizePipe]
})
export class OrdersComponent implements OnInit {

    customers: ICustomer[] = [];
    totalRecords = 0;
    pageSize = 5;

    constructor(private dataService: DataService, public trackbyService: TrackByService) { }

    ngOnInit() {
        this.getCustomersPage(1);
    }

    pageChanged(page: number) {
        this.getCustomersPage(page);
    }

    getCustomersPage(page: number) {
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe((response: IPagedResults<ICustomer[]>) => {
                this.totalRecords = response.totalRecords;
                this.customers = response.results;
            });
    }

}
