import { Component, OnInit, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ICustomer } from '../../shared/interfaces';
import { DataService } from '../../core/services/data.service';
import { MapPointComponent } from '../../shared/map/map-point.component';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';
import { NgIf, LowerCasePipe } from '@angular/common';

@Component({
    selector: 'cm-customer-details',
    templateUrl: './customer-details.component.html',
    styleUrls: ['./customer-details.component.css'],
    imports: [NgIf, LowerCasePipe, CapitalizePipe]
})
export class CustomerDetailsComponent implements OnInit {

  customer: ICustomer | null = null;
  mapEnabled: boolean = false;
  mapComponentRef: ComponentRef<any> = {} as ComponentRef<any>;

  @ViewChild('mapsContainer', { read: ViewContainerRef, static: false }) 
  private mapsViewContainerRef!: ViewContainerRef;

  constructor(private route: ActivatedRoute, 
    private dataService: DataService,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    // Subscribe to params so if it changes we pick it up. Could use this.route.parent.snapshot.params["id"] to simplify it.
    this.route.parent?.params.subscribe((params: Params) => {
      const id = +params['id'];
      if (id) {
        this.dataService.getCustomer(id)
          .subscribe((customer: ICustomer) => {
            this.customer = customer;
            if (this.customer && this.customer.latitude) {
              // Add a small delay to ensure the view is rendered
              setTimeout(() => {
                this.lazyLoadMapComponent();
              }, 100);
              // this.mapEnabled = true; // For eager loading map
            }
          });
      }
    });
  }

  async lazyLoadMapComponent() {
    console.log('lazyLoadMapComponent called', this.customer);
    
    if (!this.mapsViewContainerRef) {
      console.error('ViewContainerRef is not available');
      return;
    }
    
    console.log('ViewContainerRef length:', this.mapsViewContainerRef.length);
    
    // Clear any existing components and create new one
    this.mapsViewContainerRef.clear();
    
    try {
      // Lazy load MapComponent
      const { MapComponent } = await import('../../shared/map/map.component');
      console.log('Lazy loaded map component for customer!', MapComponent);
      
      this.mapComponentRef = this.mapsViewContainerRef.createComponent(MapComponent);
      console.log('Map component created:', this.mapComponentRef);
      
      this.mapComponentRef.instance.latitude = this.customer!.latitude;
      this.mapComponentRef.instance.longitude = this.customer!.longitude;
      this.mapComponentRef.instance.zoom = 10;
      this.mapComponentRef.instance.markerText = `<h3>${this.customer!.firstName} ${this.customer!.lastName}</h3>${this.customer!.city}, ${this.customer!.state.name}`;
      this.mapComponentRef.instance.enabled = true;
      
      console.log('Map properties set:', {
        latitude: this.mapComponentRef.instance.latitude,
        longitude: this.mapComponentRef.instance.longitude,
        enabled: this.mapComponentRef.instance.enabled
      });
    } catch (error) {
      console.error('Error loading map component:', error);
    }
  }


}
