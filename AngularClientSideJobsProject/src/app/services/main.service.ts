import { Injectable } from '@angular/core';
import { JobFields } from '../models/jobFields';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }
  getCurrentUserName()
  {
    const userString = localStorage.getItem('user');
    if (userString) {
      const userObj = JSON.parse(userString);
      return userObj.userName;
    } else {
      return "guest";
    }
  }

  getJobFieldToSearch()
  {
    const userString = localStorage.getItem('user');
    if (userString) {
      const userObj = JSON.parse(userString);
      return "Search by: "+JobFields[userObj.jobSearchField];
    } else {
      return "";
    }
  }
}
