import { Component, Output, EventEmitter } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

@Component({
  selector: 'filter-textbox',
  template: `
    <form>
         Filter:
         <input type="text" 
                [(ngModel)]="model.filter" 
                (keyup)="filterChanged($event)"  />
    </form>
  `,
  directives: [FORM_DIRECTIVES]
})
export class FilterTextboxComponent {

  
    model: { filter: string } = { filter: null };
    
    @Output()
    changed: EventEmitter<string> = new EventEmitter();

    filterChanged(event: any) {
        event.preventDefault();
        this.changed.emit(this.model.filter); //Raise changed event
    }
}
