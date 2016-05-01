import { Directive, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[sort-by]',
  host: {
    '(click)': 'onClick($event)'
  }
})
export class SortByDirective {
	
	private _sortProperty: string;
  
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