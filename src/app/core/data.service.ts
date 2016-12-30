import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { ICustomer, IOrder, IState, IPagedResults } from '../shared/interfaces';

@Injectable()
export class DataService {
  
    customersBaseUrl: string = '/api/customers';
    ordersBaseUrl: string = '/api/orders';
    orders: IOrder[];
    states: IState[];

    constructor(private http: Http) { }
    
    getCustomers() : Observable<ICustomer[]> {
        return this.http.get(this.customersBaseUrl)
                    .map((res: Response) => {
                        let customers = res.json();
                        this.calculateCustomersOrderTotal(customers);
                        return customers;
                    })
                    .catch(this.handleError);
    }

    getCustomersPage(page: number, pageSize: number) : Observable<IPagedResults<ICustomer[]>> {
        return this.http.get(`${this.customersBaseUrl}/page/${page}/${pageSize}`)
                   .map((res: Response) => {
                       const totalRecords = +res.headers.get('X-InlineCount');
                       let customers = res.json();
                       this.calculateCustomersOrderTotal(customers);
                       return {
                           results: customers,
                           totalRecords: totalRecords
                       };
                   })
                   .catch(this.handleError);
    }
    
    getCustomer(id: number) : Observable<ICustomer> {
        return this.http.get(this.customersBaseUrl + '/' + id)
                   .map((res: Response) => {
                       let customer = res.json();
                       this.calculateCustomersOrderTotal([customer]);
                       return customer;
                   })
                   .catch(this.handleError);
    }
    
    updateCustomer(customer: ICustomer) : Observable<boolean> {
        return this.http.put(this.customersBaseUrl + '/' + customer.id, customer)
                   .map((res: Response) => res.json())
                   .catch(this.handleError);  
    }
    
    getStates(): Observable<IState[]> {
        return this.http.get('/api/states')
                   .map((res: Response) => res.json())
                   .catch(this.handleError); 
    }
    
    handleError(error: any) {
        console.error('server error:', error); 
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json().error;
          } catch(err) {
            errMessage = error.statusText;
          }
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
    }

    //Not using now but leaving since they show how to create
    //and work with custom observables
       
    createObservable(data: any) : Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(data);
            observer.complete();
        });
    }

    calculateCustomersOrderTotal(customers: ICustomer[]) {
        for (let customer of customers) {
            if (customer && customer.orders) {
                let total = 0;
                for (let order of customer.orders) {
                    total += order.itemCost;
                }
                customer.orderTotal = total;
            }
        }
    }

}
