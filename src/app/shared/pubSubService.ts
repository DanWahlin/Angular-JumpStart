import { EventEmitter } from 'angular2/core';

export class PubSubService {
  
  static eventEmitter: EventEmitter<any> = new EventEmitter();
  static eventsList: Array<IEventListItem> = [];
  
  static emit(eventData: IPubSubServiceEvent) {
    this.eventEmitter.emit({ event: eventData.eventName, data: eventData.data });
  }
  
  static on(eventName: string, callback: (eventInfo: IPubSubServiceEvent) => void) {  
        let found: boolean;
        this.eventsList.forEach((eventEntry: IEventListItem) => {
          if (eventEntry.eventName === eventName) {
            eventEntry.callbacks.push(callback);
            found = true;
          }
        });
        
        if (!found) {
          this.eventsList.push( { eventName: eventName, callbacks: [ callback ] });
        }
        

  }
  
  static initialize() {
      this.eventEmitter.subscribe((eventData: IPubSubServiceEvent) => {

      });
  }
  
}

PubSubService.initialize();

export interface IPubSubServiceEvent {
  eventName: string;
  data: any;
}

export interface IEventListItem {
  eventName: string;
  callbacks: Array< (eventInfo: IPubSubServiceEvent) => void >;
}