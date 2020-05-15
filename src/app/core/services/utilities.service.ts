import { Injectable, Inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilitiesService {    
    constructor(@Inject('Window') private window: Window) { }

    getApiUrl() {
        const port = this.getPort();
        return `${this.window.location.protocol}//${this.window.location.hostname}${port}`;
    }

    private getPort() {
        if (this.window.location.port) {
            // return ':' + this.window.location.port;
            return ':' + 7071;
        }
        return '';
    }
}