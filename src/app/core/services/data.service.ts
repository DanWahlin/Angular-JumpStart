import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { ICustomer, IOrder, IState, IPagedResults, IApiResponse } from '../../shared/interfaces';

@Injectable()
export class DataService {
  
    customersBaseUrl: string = '/api/customers';
    ordersBaseUrl: string = '/api/orders';
    orders: IOrder[];
    states: IState[];

    constructor(private http: HttpClient) { }
    
    getCustomers() : Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(this.customersBaseUrl)
                    .map(customers => {
                        this.calculateCustomersOrderTotal(customers);
                        return customers;
                    })
                    .catch(this.handleError);
    }

    getCustomersPage(page: number, pageSize: number) : Observable<IPagedResults<ICustomer[]>> {
        return this.http.get<ICustomer[]>(`${this.customersBaseUrl}/page/${page}/${pageSize}`, {observe: 'response'})
                   .map(res => {
                       const totalRecords = +res.headers.get('X-InlineCount');
                       let customers = res.body as ICustomer[];
                       this.calculateCustomersOrderTotal(customers);
                       return {
                           results: customers,
                           totalRecords: totalRecords
                       };
                   })
                   .catch(this.handleError);
    }
    
    getCustomer(id: number) : Observable<ICustomer> {
        return this.http.get<ICustomer>(this.customersBaseUrl + '/' + id)
                   .map(customer => {
                       this.calculateCustomersOrderTotal([customer]);
                       return customer;
                   })
                   .catch(this.handleError);
    }

    insertCustomer(customer: ICustomer) : Observable<ICustomer> {
        return this.http.post<ICustomer>(this.customersBaseUrl, customer)
                   .catch(this.handleError);
    }
    
    updateCustomer(customer: ICustomer) : Observable<boolean> {
        return this.http.put<IApiResponse>(this.customersBaseUrl + '/' + customer.id, customer)
                   .map(res => res.status)           
                   .catch(this.handleError);  
    }

    deleteCustomer(id: number) : Observable<boolean> {
        return this.http.delete<IApiResponse>(this.customersBaseUrl + '/' + id)
                   .map(res => res.status)
                   .catch(this.handleError);
    }
    
    getStates(): Observable<IState[]> {
        return this.http.get<IState[]>('/api/states')
                   .catch(this.handleError); 
    }
    
    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error); 
        if (error.error instanceof Error) {
          let errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          //return Observable.throw(err.text() || 'backend server error');
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
