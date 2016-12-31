import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { app_routing } from './app.routing';

import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { CoreModule }   from './core/core.module';
import { SharedModule }   from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    LoginModule,    //Eager loaded since we may need to go here right away as browser loads based on route user enters
    app_routing,    //Main routes for application
    CoreModule,     //Singleton objects (services, components that are loaded only once, etc.)
    SharedModule    //Shared (multi-instance) objects
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }