import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  // jobsSentCV : string[] =[]

  private cvCountSubject = new BehaviorSubject<number>(0);
  cvCount = this.cvCountSubject.asObservable();

  addCV():number{
    let currentIndex: number;
    this.cvCountSubject.next(this.cvCountSubject.value+1)
    this.cvCount.subscribe(index => {
      currentIndex = index;
      return currentIndex;
    });  

    return 0;

  }
}
