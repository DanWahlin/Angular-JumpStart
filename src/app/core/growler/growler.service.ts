import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GrowlerService {

    constructor() { }

    growl: (message: string, growlType: GrowlerMessageType) => number = () => 0;

}

export enum GrowlerMessageType {
  Success,
  Danger,
  Warning,
  Info
}
