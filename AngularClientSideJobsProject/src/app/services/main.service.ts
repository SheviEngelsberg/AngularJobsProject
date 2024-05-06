import { Injectable } from '@angular/core';
import { JobFields } from '../models/jobFields';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }
  getCurrentUserName()
  {
    if (typeof localStorage !== 'undefined') {
      const userString = localStorage.getItem('user');
      if (userString) {
        const userObj = JSON.parse(userString);
        return userObj.userName;
      } else {
        return "guest";
      }    
    } else {
      return "guest";  
      }
    
  }

  getJobFieldToSearch()
  {
    if (typeof localStorage !== 'undefined') {
      const userString = localStorage.getItem('user');
      if (userString) {
        const userObj = JSON.parse(userString);
        return "Search by: "+JobFields[userObj.jobSearchField];
      } else {
        return "";
      }    
    } else {
      return ""
    }
    
    
  }

  isUserLoggedIn()
  {
    if (typeof localStorage !== 'undefined') {
      const userString = localStorage.getItem('user');
      return !!userString;
    } else {
      return false;
    }
    
  }

}
