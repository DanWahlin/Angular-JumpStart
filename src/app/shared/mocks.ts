import { Type } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, UrlSegment, Params, Data, Route, ParamMap } from '@angular/router';

import { Observable, of } from 'rxjs';

import { ICustomer, IPagedResults } from './interfaces';

export class MockDataService {
    constructor() {}

    getCustomer(id: number): Observable<ICustomer> {
        if (id === 1) {
            return of(customers.slice(0, 1)[0]);
        } else {
            return of(null);
        }
    }

    getCustomersPage(page: number, pageSize: number): Observable<IPagedResults<ICustomer[]>> {
        const topVal = pageSize,
            skipVal = page,
            skip = (isNaN(skipVal)) ? 0 : +skipVal;
        let top = (isNaN(topVal)) ? 10 : skip + (+topVal);

        if (top > customers.length) {
            top = skip + (customers.length - skip);
        }

        return of({
            totalRecords: customers.length,
            results: customers.slice(skip, top)
        });
    }

    getCustomers(): Observable<ICustomer[]> {
        return of(customers);
    }
}

export class MockActivatedRoute implements ActivatedRoute {
    snapshot: ActivatedRouteSnapshot;
    url: Observable<UrlSegment[]>;
    params: Observable<Params>;
    queryParams: Observable<Params>;
    fragment: Observable<string>;
    data: Observable<Data>;
    outlet: string;
    component: Type<any> | string;
    routeConfig: Route;
    root: ActivatedRoute;
    parent: ActivatedRoute;
    firstChild: ActivatedRoute;
    children: ActivatedRoute[];
    pathFromRoot: ActivatedRoute[];
    paramMap: Observable<ParamMap>;
    queryParamMap: Observable<ParamMap>;
    toString(): string {
        return '';
    }
}

export function getActivatedRouteWithParent(params: any[]) {
    const route = new MockActivatedRoute();
    route.parent = new MockActivatedRoute();
    if (params) {
        for (const param of params) {
            // var keyNames = Object.keys(param);
            route.parent.params = of(param);
        }
    }

    return route;
}

export const customers = [
    {
        'id': 1,
        'firstName': 'ted',
        'lastName': 'james',
        'gender': 'male',
        'address': '1234 Anywhere St.',
        'city': ' Phoenix ',
        'state': {
            'abbreviation': 'AZ',
            'name': 'Arizona'
        },
        'orders': [
            { 'productName': 'Basketball', 'itemCost': 7.99 },
            { 'productName': 'Shoes', 'itemCost': 199.99 }
        ],
        'latitude': 33.299,
        'longitude': -111.963
    },
    {
        'id': 2,
        'firstName': 'Michelle',
        'lastName': 'Thompson',
        'gender': 'female',
        'address': '345 Cedar Point Ave.',
        'city': 'Encinitas ',
        'state': {
            'abbreviation': 'CA',
            'name': 'California'
        },
        'orders': [
            { 'productName': 'Frisbee', 'itemCost': 2.99 },
            { 'productName': 'Hat', 'itemCost': 5.99 }
        ],
        'latitude': 33.037,
        'longitude': -117.291
    },
    {
        'id': 3,
        'firstName': 'Zed',
        'lastName': 'Bishop',
        'gender': 'male',
        'address': '1822 Long Bay Dr.',
        'city': ' Seattle ',
        'state': {
            'abbreviation': 'WA',
            'name': 'Washington'
        },
        'orders': [
            { 'productName': 'Boomerang', 'itemCost': 29.99 },
            { 'productName': 'Helmet', 'itemCost': 19.99 },
            { 'productName': 'Kangaroo Saddle', 'itemCost': 179.99 }
        ],
        'latitude': 47.596,
        'longitude': -122.331
    },
    {
        'id': 4,
        'firstName': 'Tina',
        'lastName': 'Adams',
        'gender': 'female',
        'address': '79455 Pinetop Way',
        'city': 'Chandler',
        'state': {
            'abbreviation': 'AZ',
            'name': ' Arizona '
        },
        'orders': [
            { 'productName': 'Budgie Smugglers', 'itemCost': 19.99 },
            { 'productName': 'Swimming Cap', 'itemCost': 5.49 }
        ],
        'latitude': 33.299,
        'longitude': -111.963
    },
    {
        'id': 5,
        'firstName': 'Igor',
        'lastName': 'Minar',
        'gender': 'male',
        'address': '576 Crescent Blvd.',
        'city': ' Dallas',
        'state': {
            'abbreviation': 'TX',
            'name': 'Texas'
        },
        'orders': [
            { 'productName': 'Bow', 'itemCost': 399.99 },
            { 'productName': 'Arrows', 'itemCost': 69.99 }
        ],
        'latitude': 32.782927,
        'longitude': -96.806191
    },
    {
        'id': 6,
        'firstName': 'Brad',
        'lastName': 'Green',
        'gender': 'male',
        'address': '9874 Center St.',
        'city': 'Orlando ',
        'state': {
            'abbreviation': 'FL',
            'name': 'Florida'
        },
        'orders': [
            { 'productName': 'Baseball', 'itemCost': 9.99 },
            { 'productName': 'Bat', 'itemCost': 19.99 }
        ],
        'latitude': 28.384238,
        'longitude': -81.564103
    },
    {
        'id': 7,
        'firstName': 'Misko',
        'lastName': 'Hevery',
        'gender': 'male',
        'address': '9812 Builtway Appt #1',
        'city': 'Carey ',
        'state': {
            'abbreviation': 'NC',
            'name': 'North Carolina'
        },
        'orders': [
            { 'productName': 'Surfboard', 'itemCost': 299.99 },
            { 'productName': 'Wax', 'itemCost': 5.99 },
            { 'productName': 'Shark Repellent', 'itemCost': 15.99 }
        ],
        'latitude': 35.727985,
        'longitude': -78.797594
    },
    {
        'id': 8,
        'firstName': 'Heedy',
        'lastName': 'Wahlin',
        'gender': 'female',
        'address': '4651 Tuvo St.',
        'city': 'Anaheim',
        'state': {
            'abbreviation': 'CA',
            'name': 'California'
        },
        'orders': [
            { 'productName': 'Saddle', 'itemCost': 599.99 },
            { 'productName': 'Riding cap', 'itemCost': 79.99 }
        ],
        'latitude': 33.809898,
        'longitude': -117.918757
    },
    {
        'id': 9,
        'firstName': 'John',
        'lastName': 'Papa',
        'gender': 'male',
        'address': '66 Ray St.',
        'city': ' Orlando',
        'state': {
            'abbreviation': 'FL',
            'name': 'Florida'
        },
        'orders': [
            { 'productName': 'Baseball', 'itemCost': 9.99 },
            { 'productName': 'Bat', 'itemCost': 19.99 }
        ],
        'latitude': 28.384238,
        'longitude': -81.564103
    },
    {
        'id': 10,
        'firstName': 'Tonya',
        'lastName': 'Smith',
        'gender': 'female',
        'address': '1455 Chandler Blvd.',
        'city': ' Atlanta',
        'state': {
            'abbreviation': 'GA',
            'name': 'Georgia'
        },
        'orders': [
            { 'productName': 'Surfboard', 'itemCost': 299.99 },
            { 'productName': 'Wax', 'itemCost': 5.99 },
            { 'productName': 'Shark Repellent', 'itemCost': 7.99 }
        ],
        'latitude': 33.762297,
        'longitude': -84.392953
    },
    {
        'id': 11,
        'firstName': 'ward',
        'lastName': 'bell',
        'gender': 'male',
        'address': '888 Central St.',
        'city': 'Los Angeles',
        'state': {
            'abbreviation': 'CA',
            'name': 'California'
        },
        'latitude': 34.042552,
        'longitude': -118.266429
    },
    {
        'id': 12,
        'firstName': 'Marcus',
        'lastName': 'Hightower',
        'gender': 'male',
        'address': '1699 Atomic St.',
        'city': 'Dallas',
        'state': {
            'abbreviation': 'TX',
            'name': 'Texas'
        },
        'latitude': 32.782927,
        'longitude': -96.806191
    },
    {
        'id': 13,
        'firstName': 'Thomas',
        'lastName': 'Martin',
        'gender': 'male',
        'address': '98756 Center St.',
        'city': 'New York',
        'state': {
            'abbreviation': 'NY',
            'name': 'New York City'
        },
        'orders': [
            { 'productName': 'Car', 'itemCost': 42999.99 },
            { 'productName': 'Wax', 'itemCost': 5.99 },
            { 'productName': 'Shark Repellent', 'itemCost': 7.99 }
        ],
        'latitude': 40.725037,
        'longitude': -74.004903
    },
    {
        'id': 14,
        'firstName': 'Jean',
        'lastName': 'Martin',
        'gender': 'female',
        'address': '98756 Center St.',
        'city': 'New York City',
        'state': {
            'abbreviation': 'NY',
            'name': 'New York'
        },
        'latitude': 40.725037,
        'longitude': -74.004903
    },
    {
        'id': 15,
        'firstName': 'Pinal',
        'lastName': 'Dave',
        'gender': 'male',
        'address': '23566 Directive Pl.',
        'city': 'White Plains',
        'state': {
            'abbreviation': 'NY',
            'name': 'New York'
        },
        'latitude': 41.028726,
        'longitude': -73.758261
    },
    {
        'id': 16,
        'firstName': 'Robin',
        'lastName': 'Cleark',
        'gender': 'female',
        'address': '35632 Richmond Circle Apt B',
        'city': 'Las Vegas',
        'state': {
            'abbreviation': 'NV',
            'name': 'Nevada'
        },
        'latitude': 36.091824,
        'longitude': -115.174247
    },
    {
        'id': 17,
        'firstName': 'Fred',
        'lastName': 'Roberts',
        'gender': 'male',
        'address': '12 Ocean View St.',
        'city': 'Houston',
        'state': {
            'abbreviation': 'TX',
            'name': 'Texas'
        },
        'latitude': 29.750163,
        'longitude': -95.362769
    },
    {
        'id': 18,
        'firstName': 'Robyn',
        'lastName': 'Flores',
        'gender': 'female',
        'address': '23423 Adams St.',
        'city': 'Seattle',
        'state': {
            'abbreviation': 'WA',
            'name': 'Washington'
        },
        'latitude': 47.596,
        'longitude': -122.331
    },
    {
        'id': 19,
        'firstName': 'Elaine',
        'lastName': 'Jones',
        'gender': 'female',
        'address': '98756 Center St.',
        'city': 'Barcelona',
        'state': {
            'abbreviation': 'CAT',
            'name': 'Catalonia'
        },
        'latitude': 41.386444,
        'longitude': 2.111988
    },
    {
        'id': 20,
        'firstName': 'Lilija',
        'lastName': 'Arnarson',
        'gender': 'female',
        'address': '23423 Adams St.',
        'city': 'Reykjavik',
        'state': {
            'abbreviation': 'IS',
            'name': 'Iceland'
        },
        'latitude': 64.120278,
        'longitude': -21.830471
    },
    {
        'id': 21,
        'firstName': 'Laurent',
        'lastName': 'Bugnion',
        'gender': 'male',
        'address': '9874 Lake Blvd.',
        'city': 'Zurich',
        'state': {
            'abbreviation': 'COZ',
            'name': 'Canton of Zurick'
        },
        'orders': [
            { 'productName': 'Baseball', 'itemCost': 9.99 },
            { 'productName': 'Bat', 'itemCost': 19.99 }
        ],
        'latitude': 47.341337,
        'longitude': 8.582503
    },
    {
        'id': 22,
        'firstName': 'Gabriel',
        'lastName': 'Flores',
        'gender': 'male',
        'address': '2543 Cassiano',
        'city': 'Rio de Janeiro',
        'state': {
            'abbreviation': 'WA',
            'name': 'Rio de Janeiro'
        },
        'latitude': -22.919369,
        'longitude': -43.181836
    }
];
