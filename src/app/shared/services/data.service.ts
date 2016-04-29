import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { ICustomer, IOrder } from '../interfaces';

@Injectable()
export class DataService {
  
    baseUrl: string = '';

    constructor(private _http: Http) { }
    
    getCustomers() : Observable<ICustomer[]> {
        return this._http.get(this.baseUrl + 'customers.json')
                        .map((res: Response) => res.json())
                        .catch(this.handleError);
    }

    getOrders() : Observable<IOrder[]> {
      return this._http.get(this.baseUrl + 'orders.json')
                      .map((res: Response) => res.json())
                      .catch(this.handleError);               
    }
    
    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
