import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize',
    standalone: true
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any) {
    return typeof value === 'string' && value.charAt(0).toUpperCase() + value.slice(1) || value;
  }
}
