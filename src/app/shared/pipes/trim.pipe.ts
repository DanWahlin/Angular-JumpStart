import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'trim'})
export class TrimPipe {
  transform(value: any) {
    if (!value) {
      return '';
    }
    return value.trim();
  }
}