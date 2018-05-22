import { Injectable } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class EventBusService {

    subject = new Subject<any>();

    constructor() { }

    on(event: Events, action: any): Subscription {
         return this.subject
                .pipe(
                    filter((e: EmitEvent) => {
                      return e.name === event;
                    }),
                    map((e: EmitEvent) => {
                      return e.value;
                    })
                  )
                    .subscribe(action);
    }

    emit(event: EmitEvent) {
        this.subject.next(event);
    }
}

export class EmitEvent {

  constructor(public name: any, public value?: any) { }

}

export enum Events {
  httpRequest,
  httpResponse
}
