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

//   getUserByNameAndPassword(name?: string, password?: string): Observable<User | null> {
//     return this.http.get<User>(`https://localhost:44337/api/User/GetUser/${name}/${password}`).pipe(
//       tap((user: User | null) => {
//         if (user === null) {
//           alert('User not found');
//         } else {
//           localStorage.setItem('user', JSON.stringify(user));
//           this.router.navigate(['/jobs']);
//         }
//       })
//     );
//   }
// }

}
