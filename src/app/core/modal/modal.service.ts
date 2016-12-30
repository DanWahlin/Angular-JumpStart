import { Injectable, EventEmitter } from '@angular/core';

export interface IModalContent {
  header?: string;
  body?: string;
  cancelText?: string;
  submitText?: string;
}

@Injectable()
export class ModalService {
    
    constructor() { }

    show: (modalContent: IModalContent) => Promise<boolean>;
    hide: () => void;

}