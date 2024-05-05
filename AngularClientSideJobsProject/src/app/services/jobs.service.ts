import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../models/job';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  getJobsList(): Observable<Job[]>{
    return this.http.get<Job[]>('https://localhost:44337/api/Job/GetAllJobs');

  }



}
