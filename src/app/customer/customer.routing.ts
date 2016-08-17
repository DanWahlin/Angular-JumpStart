import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent }   from './customer.component';
import { CustomerOrdersComponent } from './customerOrders.component';
import { CustomerDetailsComponent } from './customerDetails.component';
import { CustomerEditComponent } from './customerEdit.component';

const CUSTOMER_ROUTES: Routes = [
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

export const CUSTOMER_ROUTING = RouterModule.forChild(CUSTOMER_ROUTES);

