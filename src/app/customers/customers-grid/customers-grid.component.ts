import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { SorterService } from '../../core/services/sorter.service';
import { TrackByService } from '../../core/services/trackby.service';
import { ICustomer } from '../../shared/interfaces';
import { TrimPipe } from '../../shared/pipes/trim.pipe';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { SortByDirective } from '../../shared/directives/sortby.directive';

@Component({
    selector: 'cm-customers-grid',
    templateUrl: './customers-grid.component.html',
    styleUrls: ['./customers-grid.component.css'],
    // When using OnPush detectors, then the framework will check an OnPush
    // component when any of its input properties changes, when it fires
    // an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [SortByDirective, RouterLink, CurrencyPipe, CapitalizePipe, TrimPipe]
})
export class CustomersGridComponent implements OnInit {

  @Input() customers: ICustomer[] = [];

  constructor(private sorterService: SorterService, public trackbyService: TrackByService) { }

  ngOnInit() {

  }

  sort(prop: string) {
    this.customers = this.sorterService.sort(this.customers, prop);
  }

}
