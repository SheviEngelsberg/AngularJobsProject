import { Component, Input } from '@angular/core';
import { Job } from '../../models/job';
import { JobFields } from '../../models/jobFields';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {

  @Input('jobData') jobData: Job | null = null;
  JobFields: any= JobFields;

}
