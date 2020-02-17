import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from './map.component';
import { MapPointComponent } from './map-point.component';

@NgModule({
  imports: [CommonModule],
  exports: [MapComponent, MapPointComponent],
  declarations: [MapComponent, MapPointComponent]
})
export class MapModule { }
