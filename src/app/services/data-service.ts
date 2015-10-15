import { Http } from 'angular2/http';
import { Injectable } from 'angular2/angular2';

@Injectable()
export class DataService {

    customers: any;

    constructor(http: Http) {
        this.customers = http.get('customers.json').map(res => res.json());
    }

}
