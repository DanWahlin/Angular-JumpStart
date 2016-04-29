import { Directive, Input, Output, EventEmitter } from 'angular2/core';

@Directive({
  selector: '[sort-by]',
  host: {
    '(click)': 'onClick($event)'
  }
})
export class SortByDirective {
	
	_sortProperty: string;
  
  @Output()
	sorted: EventEmitter<string> = new EventEmitter();
	
  constructor() { }
    
  @Input('sort-by') 
  set sortBy(value: string) {
    this._sortProperty = value;
  }

  onClick(event: any) {
    event.preventDefault();
    this.sorted.next(this._sortProperty); //Raise clicked event
  }

}