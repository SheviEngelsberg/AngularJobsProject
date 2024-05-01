import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../models/job';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  constructor(private jobsService: JobsService){}

  @Input() jobsList: Job[] = [];

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(){
    this.jobsService.getJobsList().subscribe(
      (jobs: Job[]) => {
        this.jobsList = jobs;
      },
      (error) => {
        console.error('Error fetching jobs:', error);
        // Handle the error here, e.g. set a default jobsList or show an error message
        this.jobsList = []; // Setting an empty array as default
      }
    );
  }
}
