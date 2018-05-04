import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { EventBusService, Events } from '../services/event-bus.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'cm-overlay',
    templateUrl: './overlay.component.html',
    styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit, OnDestroy {

    httpRequestSub: Subscription;
    httpResponseSub: Subscription;
    enabled = false;
    queue = [];
    timerId: number = null;
    timerHideId: number = null;

    @Input() delay = 500;

    constructor(private eventBus: EventBusService) { }

    ngOnInit() {
        // Handle request
        this.httpRequestSub = this.eventBus.on(Events.httpRequest, (() => {
            this.queue.push({});
            if (this.queue.length === 1) {
                // Only show if we have an item in the queue after the delay time
                setTimeout(() => {
                    if (this.queue.length) { this.enabled = true; }
                }, this.delay);
            }
        }));

        // Handle response
        this.httpResponseSub = this.eventBus.on(Events.httpResponse, (() => {
            this.queue.pop();
            if (this.queue.length === 0) {
                // Since we don't know if another XHR request will be made, pause before
                // hiding the overlay. If another XHR request comes in then the overlay
                // will stay visible which prevents a flicker
                setTimeout(() => {
                    // Make sure queue is still 0 since a new XHR request may have come in
                    // while timer was running
                    if (this.queue.length === 0) { this.enabled = false; }
                }, this.delay);
            }
        }));
    }

    ngOnDestroy() {
        this.httpRequestSub.unsubscribe();
        this.httpResponseSub.unsubscribe();
    }

}
