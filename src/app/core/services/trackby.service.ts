import { Injectable } from '@angular/core';

import { ICustomer, IOrder } from '../../shared/interfaces';

@Injectable({ providedIn: 'root' })
export class TrackByService {

  customer(index: number, customer: ICustomer) {
    return customer.id;
  }

  order(index: number, order: IOrder) {
    return index;
  }



}
