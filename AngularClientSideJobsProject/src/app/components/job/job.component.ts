import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '../../models/job';
import { JobFields } from '../../models/jobFields';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {

  constructor(private jobService: JobService) { }

  @Input('jobData') jobData: Job | null = null;
  JobFields: any = JobFields;
  showDetails: boolean = false;
  alreadySentCV: boolean = false;
  jobsSentCV : string[] =[]
  currentIndex:number|undefined
  @Output() jobCV: EventEmitter<any> = new EventEmitter<any>();


  ShowDetails() {
    this.showDetails = !this.showDetails;
  }

  addCV() {
    if (!this.alreadySentCV) {
      this.currentIndex=this.jobService.addCV();
      this.alreadySentCV = true;
      this.jobCV.emit(this.jobData)
    }
    else {
      alert("You have already sent a CV for this position")
    }
  }
}



// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { send } from 'process';
// import { Job } from '../../models/job';
// import { jobFields } from '../../models/jobFileds';
// import { JobService } from '../../services/job.service';

// @Component({
//   selector: 'app-job',
//   templateUrl: './job.component.html',
//   styleUrl: './job.component.scss'
// })
// export class JobComponent {

//   constructor(private jobService: JobService){}

//   @Input('jobData') jobData:Job| null = null
//   @Output() jobCV: EventEmitter<any> = new EventEmitter<any>();
//   jobFileds = jobFields
//   showDetails: boolean =false;
//   sendCV: boolean = false;

//   ShowDetails(){
//     this.showDetails=!this.showDetails;
//   }

//   getField() {
//     if (this.jobData) {      
//       const x= jobFields[this.jobData.jobField];
//       return x;
//     }
//     return "Unknown";
//   }

//   addCV() {
//     if(!this.sendCV){
//       this.jobService.addCV()
//       this.sendCV = true;
//       this.jobCV.emit(this.jobData)
//     }
//     else
//       alert('You have already sent a CV for this position')
//   }
// }
