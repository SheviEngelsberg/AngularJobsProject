import { Injectable } from '@angular/core';
import { JobFields } from '../models/jobFields';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  getCurrentUserName() {
    try {
      const userString = localStorage.getItem('user');
      if (userString) {
        const userObj = JSON.parse(userString);
        return userObj.userName;
      } else {
        return "guest";
      }
    } catch (error) {
      return "guest";
    }
  }

  getJobFieldToSearch() {
    try {
      const userString = localStorage.getItem('user');
      if (userString) {
        const userObj = JSON.parse(userString);
        return JobFields[userObj.jobSearchField];
      } else {
        return "";
      }
    } catch (error) {
      return "";
    }
  }

  isUserLoggedIn() {
    try {
      const userString = localStorage.getItem('user');
      return !!userString;
    } catch (error) {
      return false;
    }
  }

  // getCountOfCV(){
  //   return 
  // }


}
