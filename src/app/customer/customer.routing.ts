import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent }   from './customer.component';
import { CustomerOrdersComponent } from './customerOrders.component';
import { CustomerDetailsComponent } from './customerDetails.component';
import { CustomerEditComponent } from './customerEdit.component';

const customer_routes: Routes = [
  { 
    path: '', 
    component: CustomerComponent,
    children: [
      { path:'orders',  component: CustomerOrdersComponent },
      { path:'details', component: CustomerDetailsComponent },
      { path:'edit', component: CustomerEditComponent }
    ]
  }
];

export const customer_routing = RouterModule.forChild(customer_routes);

