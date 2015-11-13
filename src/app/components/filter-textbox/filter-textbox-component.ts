import { Component, Output, View, EventEmitter, FORM_DIRECTIVES } from 'angular2/angular2';

@Component({
  selector: 'filter-textbox',
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

  
    model: { filter: string } = { filter: null };
    
    @Output()
    changed: EventEmitter<string> = new EventEmitter();

    filterChanged(event: any) {
        event.preventDefault();
        this.changed.next(this.model.filter); //Raise changed event
    }
}
