import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cm-map-point',
  template: ``
})
export class MapPointComponent implements OnInit {

  @Input() longitude: number = 0;
  @Input() latitude: number = 0;
  @Input() markerText: string = '';

  constructor() { }

  ngOnInit() {

  }

}
