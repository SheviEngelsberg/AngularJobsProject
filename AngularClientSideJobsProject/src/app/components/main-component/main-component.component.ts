import { Component } from '@angular/core';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss'
})
export class MainComponentComponent {

  constructor(private mainService: MainService){}

  getUserName(): string {
    return this.mainService.getCurrentUserName();
  }

  getJobField(): string{
    return this.mainService.getJobFieldToSearch();
  }

}
