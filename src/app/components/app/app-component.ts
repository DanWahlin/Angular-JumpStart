import { Component, View } from 'angular2/angular2';
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import { CustomersComponent } from '../customers/customers-component';
import { OrdersComponent } from '../orders/orders-component';

@Component({ selector: 'app' })
@View({
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/',              as: 'Customers',  component: CustomersComponent },
  { path: '/orders/:id',    as: 'Orders',     component: OrdersComponent    }
])
export class AppComponent {

}
