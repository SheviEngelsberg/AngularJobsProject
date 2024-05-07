import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobFields } from '../../models/jobFields';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit{
  constructor( private activeRouter: ActivatedRoute){}
  area: string | undefined;
  field: JobFields | undefined ;
  

  @Input() search: boolean = false;
  @Output() filterChange: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }
  
  filter() {
    this.filterChange.emit({ area: this.area, field: this.field});
  }

  //convert the enum values to array of strings and return the array
  getField(){
    return Object.values(JobFields).filter(value => typeof value === 'string');
  }  

  showSearch()
  {
    this.search = !this.search
  }
}
