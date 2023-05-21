import { Routes } from "@angular/router";
import { CustomerComponent } from "./customer.component";
import { CustomerOrdersComponent } from "./customer-orders/customer-orders.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { CustomerEditComponent } from "./customer-edit/customer-edit.component";
import { CanActivateGuard } from "./guards/can-activate.guard";
import { CanDeactivateGuard } from "./guards/can-deactivate.guard";

export const CUSTOMER_ROUTES: Routes = [
    {
      path: '',
      component: CustomerComponent,
      children: [
        { path: 'orders', component: CustomerOrdersComponent },
        { path: 'details', component: CustomerDetailsComponent },
        {
          path: 'edit',
          component: CustomerEditComponent,
          canActivate: [CanActivateGuard],
          canDeactivate: [CanDeactivateGuard]
        }
      ]
    }
  ];