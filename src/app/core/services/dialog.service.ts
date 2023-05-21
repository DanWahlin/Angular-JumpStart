import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DialogService {

  promise: Promise<boolean> = {} as Promise<boolean>;
  message = 'Is it OK?';

  confirm(message?: string) {
    if (message) { this.message = message; }
    this.promise = new Promise<boolean>(this.resolver);
    return this.promise;
  }

  resolver(resolve: any) {
      return resolve(window.confirm('Is it OK?'));
  }

}
