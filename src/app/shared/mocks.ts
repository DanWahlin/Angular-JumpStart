import { ActivatedRouteSnapshot, ActivatedRoute, UrlSegment, Params, Data, Route, ParamMap } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Type } from "@angular/core";
import { ICustomer } from "./interfaces";

export class MockDataService {
    getCustomer(id: number) : Observable<ICustomer> {
        console.log(id);
        if (id === 1) {
            return Observable.of({
                "id": 1,
                "firstName": "ted",
                "lastName": "james",
                "gender": "male",
                "address": "1234 Anywhere St.",
                "city": " Phoenix ",
                "state": {
                    "abbreviation": "AZ",
                    "name": "Arizona"
                },
                "orders": [
                    {"productName": "Basketball", "itemCost": 7.99},
                    {"productName": "Shoes", "itemCost": 199.99}
                ],
                "latitude": 33.299,
                "longitude": -111.963
            });
        } 
        else {
            return Observable.of(null);
        }
    }
  }
  
  export class MockActivatedRoute implements ActivatedRoute {
    snapshot : ActivatedRouteSnapshot;
    url : Observable<UrlSegment[]>;
    params : Observable<Params>;
    queryParams : Observable<Params>;
    fragment : Observable<string>;
    data : Observable<Data>;
    outlet : string;
    component : Type<any>|string;
    routeConfig : Route;
    root : ActivatedRoute;
    parent : ActivatedRoute;
    firstChild : ActivatedRoute;
    children : ActivatedRoute[];
    pathFromRoot : ActivatedRoute[];
    paramMap: Observable<ParamMap>;
    queryParamMap: Observable<ParamMap>;
    toString() : string{
        return "";
    };
  }

  export function getActivatedRouteWithParent(params: any[]) {
    const route = new MockActivatedRoute();
    route.parent = new MockActivatedRoute();
    if (params) {
        for (const param of params) {
            //var keyNames = Object.keys(param);
            route.parent.params = Observable.of(param);
        }
    }

    return route;
  }