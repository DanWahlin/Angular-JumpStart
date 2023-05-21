import { Injectable } from '@angular/core';

export interface IModalContent {
  header?: string;
  body?: string;
  cancelButtonText?: string;
  OKButtonText?: string;
  cancelButtonVisible?: boolean;
}

@Injectable({ providedIn: 'root' })
export class ModalService {

    constructor() { }

    show: (modalContent: IModalContent) => Promise<boolean> = () => { return {} as Promise<boolean>; };
    hide: () => void = () => {};

}
