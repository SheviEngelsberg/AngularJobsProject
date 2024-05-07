import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'final_project_client';
  isUserLoggedIn() {
    try {
      const userString = localStorage.getItem('user');
      return !!userString;
    } catch (error) {
      return false;
    }
  }

  
}
