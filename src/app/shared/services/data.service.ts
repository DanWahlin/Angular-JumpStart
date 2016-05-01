import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//Grab everything with import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { ICustomer, IOrder, IState } from '../interfaces';

@Injectable()
export class DataService {
  
    _baseUrl: string = '';
    customers: ICustomer[];
    orders: IOrder[];
    states: IState[];

    constructor(private _http: Http) { }
    
    getCustomers() : Observable<ICustomer[]> {
        if (!this.customers) {
            return this._http.get(this._baseUrl + 'customers.json')
                        .map((res: Response) => {
                            this.customers = res.json();
                            return this.customers;
                        })
                        .catch(this._handleError);
        }
        else {
            //return cached data
            return this._createObservable(this.customers);
        }
    }
    
    getCustomer(id: number) : Observable<ICustomer> {
        if (this.customers) {
            //filter using cached data
            return this._findCustomerObservable(id);
        } else {
            //Query the existing customers to find the target customer
            return Observable.create((observer: Observer<ICustomer>) => {
                    this.getCustomers().subscribe((customers: ICustomer[]) => {
                        this.customers = customers;                
                        const cust = this._filterCustomers(id);
                        observer.next(cust);
                        observer.complete();
                })
            })
            .catch(this._handleError);
        }
    }

    getOrders(id: number) : Observable<IOrder[]> {
      return this._http.get(this._baseUrl + 'orders.json')
                .map((res: Response) => {
                    this.orders = res.json();
                    return this.orders.filter((order: IOrder) => order.customerId === id);
                })
                .catch(this._handleError);               
    }
    
    updateCustomer(customer: ICustomer) : Observable<boolean> {
        return Observable.create((observer: Observer<boolean>) => {
            this.customers.forEach((cust: ICustomer, index: number) => {
               if (cust.id === customer.id) {
                   const state = this._filterStates(customer.state.abbreviation);
                   customer.state.abbreviation = state.abbreviation;
                   customer.state.name = state.name;
                   this.customers[index] = customer;
               } 
            });
            observer.next(true);
            observer.complete();
        });
    }
    
    getStates(): Observable<IState[]> {
        if (this.states) {
            return Observable.create((observer: Observer<IState[]>) => {
                observer.next(this.states);
                observer.complete();
            });
        } else {
            return this._http.get(this._baseUrl + 'states.json').map((response: Response) => {
                this.states = response.json();
                return this.states;
            })
            .catch(this._handleError);
        }
    }
    
    private _findCustomerObservable(id: number) : Observable<ICustomer> {        
        return this._createObservable(this._filterCustomers(id));
    }
    
    private _filterCustomers(id: number) : ICustomer {
        const custs = this.customers.filter((cust) => cust.id === id);
        return (custs.length) ? custs[0] : null;
    }
    
    private _createObservable(data: any) : Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(data);
            observer.complete();
        });
    }
    
    private _filterStates(stateAbbreviation: string) {
        const filteredStates = this.states.filter((state) => state.abbreviation === stateAbbreviation);
        return (filteredStates.length) ? filteredStates[0] : null;
    }
    
    private _handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
