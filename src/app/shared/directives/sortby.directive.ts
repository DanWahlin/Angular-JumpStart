import { Directive, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[cm-sort-by]',
  host: {
    '(click)': 'onClick($event)'
  }
})
export class SortByDirective {

  private sortProperty: string;

  @Output()
  sorted: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  @Input('cm-sort-by')
  set sortBy(value: string) {
    this.sortProperty = value;
  }

  onClick(event: any) {
    event.preventDefault();
    this.sorted.next(this.sortProperty); // Raise clicked event
  }

}
