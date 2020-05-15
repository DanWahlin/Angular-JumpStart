import { Injectable, Inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilitiesService {    
    constructor(@Inject('Window') private window: Window) { }

    getApiUrl() {
        const port = this.getPort();
        return `${this.window.location.protocol}//${this.window.location.hostname}${port}`;
    }

    private getPort() {
        const port = this.window.location.port;
        if (port) {
            if (port === '4200') {
                // Local run with 'npm run' also started in api folder for Azure Functions
                return ':7071'; // for debugging Azure Functions locally
            }
            return ':' + this.window.location.port;
        }
        return '';
    }
}