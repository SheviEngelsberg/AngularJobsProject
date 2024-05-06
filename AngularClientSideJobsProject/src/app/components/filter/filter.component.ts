import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  area: string | undefined;
  field: string | undefined;

  @Output() filterChange: EventEmitter<any> = new EventEmitter<any>();

  filter() {
    this.filterChange.emit({ area: this.area, field: this.field });
  }
}
