import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
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
    app_routing, 
    CustomersModule,
    OrdersModule,
    AboutModule,
    LoginModule,
    CoreModule,   //Singleton objects
    SharedModule  //Shared (multi-instance) objects
  ],
  declarations: [ AppComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }