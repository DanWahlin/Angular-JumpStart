import { Injectable } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs/Rx';

@Injectable()
export class EventBusService {

    subject = new Subject<any>();

    constructor() { }

    on(event: Events, action: any): Subscription {
         return this.subject
                    .filter((e: EmitEvent) => {
                      return e.name === event;
                    })
                    .map((event: EmitEvent) => {
                      return event.value;
                    })
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
