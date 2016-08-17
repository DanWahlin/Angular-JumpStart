import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CustomersModule } from './customers/customers.module';
import { DataService } from './shared/services/data.service';

import { app_routing } from './app.routing';
import { SharedModule }   from './shared/shared.module';

@NgModule({
  imports:      [ BrowserModule, app_routing, 
                  CustomersModule, SharedModule.forRoot() ],
  declarations: [ AppComponent ],
  //Not working properly in shared module  
  //so putting the service here for now
  providers:    [ DataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }