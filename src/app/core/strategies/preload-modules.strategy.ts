// Preloading example from https://angular.io/docs/ts/latest/guide/router.html#!#custom-preloading

import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoggerService } from '../services/logger.service';

@Injectable()
export class PreloadModulesStrategy implements PreloadingStrategy {

  constructor(private logger: LoggerService) {}

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      this.logger.log('Preloaded: ' + route.path);
      return load();
    } else {
      return of(null);
    }
  }

}
