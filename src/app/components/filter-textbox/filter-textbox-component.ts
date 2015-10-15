import { Component, View, EventEmitter, FORM_DIRECTIVES } from 'angular2/angular2';

@Component({
  selector: 'filter-textbox',
  outputs: ['changed'],
  inputs: ['text'],
  template: `
    <form>
         Filter:
         <input type="text" 
                [(ng-model)]="model.filter" 
                (keyup)="filterChanged($event)"  />
    </form>
  `,
  directives: [FORM_DIRECTIVES]
})
export class FilterTextboxComponent {

	model = { filter: null };
	changed: EventEmitter;
	
    constructor() {
      this.changed = new EventEmitter();
    }

    filterChanged(event) {
        event.preventDefault();
        this.changed.next(this.model.filter); //Raise changed event
    }
}
