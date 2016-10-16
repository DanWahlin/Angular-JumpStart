import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Sorter } from '../../app/core/services/sorter';
import { TrackByService } from '../../app/core/services/trackby.service';

@Component({ 
  moduleId: module.id,
  selector: 'customers-grid', 
  templateUrl: 'customers-grid.component.html',
  //When using OnPush detectors, then the framework will check an OnPush 
  //component when any of its input properties changes, when it fires 
  //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CustomersGridComponent implements OnInit {

  @Input() customers: any[] = [];

  constructor(private sorter: Sorter, public trackby: TrackByService) { }
   
  ngOnInit() {

  }

  sort(prop: string) {
      this.sorter.sort(this.customers, prop);
  }

}
