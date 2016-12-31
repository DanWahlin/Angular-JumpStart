//Preloading example from https://angular.io/docs/ts/latest/guide/router.html#!#custom-preloading

import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PreloadModulesStrategy implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      console.log('Preloaded: ' + route.path);
      return load();
    } else {
      return Observable.of(null);
    }
  }
  
}