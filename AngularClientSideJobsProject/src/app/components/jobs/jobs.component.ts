import { Component, Input } from '@angular/core';
import { Job } from '../../models/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {

  @Input() jobsList: Job[] = [];
  @Input() CVList: Job[]=[]
  showCVList: boolean = false;

  jobCV($event:any){
    this.CVList.push($event)
  }

  ShowCVList(){
    this.showCVList=!this.showCVList;
  }
}
