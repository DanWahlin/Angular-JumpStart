import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { EventBusService, EmitEvent, Events } from '../services/event-bus.service';

@Injectable()
export class OverlayRequestResponseInterceptor implements HttpInterceptor {

  constructor(private eventBus: EventBusService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const randomTime = this.getRandomIntInclusive(0, 1500);
    const started = Date.now();
    this.eventBus.emit(new EmitEvent(Events.httpRequest));
    return next
          .handle(req)
          .delay(randomTime)  // Simulate random Http call delays
          .do(event => {
            if (event instanceof HttpResponse) {
              const elapsed = Date.now() - started;
              // console.log('Http response elapsed time: ' + elapsed);
              this.eventBus.emit(new EmitEvent(Events.httpResponse));
            }
          });
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}

}
