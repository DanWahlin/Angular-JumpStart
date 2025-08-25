import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'cm-filter-textbox',
    templateUrl: './filter-textbox.component.html',
    styleUrls: ['./filter-textbox.component.css'],
    imports: [FormsModule]
})
export class FilterTextboxComponent {

    model: { filter: string } = { filter: '' };

    @Output()
    changed: EventEmitter<string> = new EventEmitter<string>();

    filterChanged(event: any) {
      event.preventDefault();
      this.changed.emit(this.model.filter); // Raise changed event
    }

    clearFilter() {
      this.model.filter = '';
      this.changed.emit(this.model.filter);
    }
}
