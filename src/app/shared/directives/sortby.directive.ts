import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
    selector: '[cmSortBy]',
    standalone: true
})
export class SortByDirective {

  private sortProperty: string = '';

  @Output()
  sorted: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  @Input('cmSortBy')
  set sortBy(value: string) {
    this.sortProperty = value;
  }

  @HostListener('click', ['$event'])
  onClick(e: Event) {
    e.preventDefault();
    this.sorted.next(this.sortProperty); // Raise clicked event
  }




}
