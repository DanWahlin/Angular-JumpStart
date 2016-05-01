import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SortByDirective } from '../shared/directives/sortby.directive';
import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';
import { TrimPipe } from '../shared/pipes/trim.pipe';
import { Sorter } from '../shared/utils/sorter';
import { TrackByService } from '../shared/services/trackby.service';

@Component({ 
  selector: 'customers-grid', 
  providers: [Sorter],
  templateUrl: 'app/customers/customersGrid.component.html',
  directives: [RouterLink, SortByDirective],
  pipes: [CapitalizePipe, TrimPipe],
  //When using OnPush detectors, then the framework will check an OnPush 
  //component when any of its input properties changes, when it fires 
  //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
  changeDetection: ChangeDetectionStrategy.CheckAlways 
})
export class CustomersGridComponent implements OnInit {

  @Input() customers: any[] = [];

  constructor(private _sorter: Sorter, public trackby: TrackByService) { }
   
  ngOnInit() {

  }

  sort(prop: string) {
      this._sorter.sort(this.customers, prop);
  }

}
