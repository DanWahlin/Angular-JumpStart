import {Component, Input} from '@angular/core';

@Component({
   selector: 'cm-map-point',
   template: ``
})
export class MapPointComponent {

   @Input() longitude = 0;
   @Input() latitude = 0;
   @Input() markerText = '';

}
