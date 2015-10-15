import { Pipe } from 'angular2/angular2';

@Pipe({ name: 'currency' })
export class CurrencyPipe {

  transform(value: any) {
      if (value && !isNaN(value)) {
          return '$' + parseFloat(value).toFixed(2);
      }
      return '$0.00';
  }

}