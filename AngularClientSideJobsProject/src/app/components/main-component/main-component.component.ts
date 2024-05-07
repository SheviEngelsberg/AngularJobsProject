import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Router } from '@angular/router';
import { JobService } from '../../services/job.service';


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss'
})
export class MainComponentComponent implements OnInit {

  constructor(private mainService: MainService, private jobService: JobService, private router: Router) { }

  numOfCV: number = 0;

  ngOnInit() {
    if (this.userIsLoggedIn()) {
      this.router.navigate(['/jobs']);
    }

    else {
      this.router.navigate(['/login']);
    }

    this.jobService.cvCount.subscribe(count => this.numOfCV = count);
  }
  getUserName(): string {
    return this.mainService.getCurrentUserName();
  }

  getJobField(): string {
    return this.mainService.getJobFieldToSearch();
  }

  userIsLoggedIn(): boolean {
    return this.mainService.isUserLoggedIn();
  }

}


