import { Component ,Input } from '@angular/core';
import { Job } from '../../models/job'

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})


export class JobComponent {
  @Input('jobData') jobData : Job | null =null
}
