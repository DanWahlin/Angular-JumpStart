import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CapitalizePipe } from '../shared/pipes/capitalize.pipe';
import { TrimPipe } from '../shared/pipes/trim.pipe';
import { ICustomer } from '../shared/interfaces';
import { TrackByService } from '../shared/services/trackby.service';

@Component({ 
  moduleId: __moduleName,
  selector: 'customers-card', 
  templateUrl: 'customersCard.component.html',
  directives: [RouterLink],
  pipes: [CapitalizePipe, TrimPipe],
  //When using OnPush detectors, then the framework will check an OnPush 
  //component when any of its input properties changes, when it fires 
  //an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class CustomersCardComponent implements OnInit {

  @Input() customers: ICustomer[] = [];
  
  constructor(public trackby: TrackByService) { }
  
  ngOnInit() {

  }

}

