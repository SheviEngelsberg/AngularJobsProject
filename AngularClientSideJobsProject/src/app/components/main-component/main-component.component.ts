import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss'
})
export class MainComponentComponent implements OnInit {

  constructor(private mainService: MainService,private router: Router){} 
  
  ngOnInit() {
    if (this.userIsLoggedIn()) {
      this.router.navigate(['/jobs']); 
    } else {
      this.router.navigate(['/login']);
    }
  }
  
  getUserName(): string {
    return this.mainService.getCurrentUserName();
  }

  getJobField(): string{
    return this.mainService.getJobFieldToSearch();
  }

  userIsLoggedIn(): boolean{
    return this.mainService.isUserLoggedIn();
  }
}


