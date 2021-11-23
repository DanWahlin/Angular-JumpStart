import { Injectable } from '@angular/core';
import { ModalComponent } from './modal.component';

export interface IModalContent {
  header?: string;
  body?: string;
  cancelButtonText?: string;
  OKButtonText?: string;
  cancelButtonVisible?: boolean;
}

@Injectable()
export class ModalService {

    constructor() { }

    show: (modalContent: IModalContent) => Promise<boolean> = () => { return {} as Promise<boolean>; };
    hide: () => void = () => {};

}
