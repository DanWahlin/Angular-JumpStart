import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, delay, catchError } from 'rxjs/operators';

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
          .pipe(
            delay(randomTime),  // Simulate random Http call delays
            tap(event => {
              if (event instanceof HttpResponse) {
                const elapsed = Date.now() - started;
                this.eventBus.emit(new EmitEvent(Events.httpResponse));
              }
            }),
            catchError(err => {
              this.eventBus.emit(new EmitEvent(Events.httpResponse));
              return of(null);
            })
          );
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}

}
