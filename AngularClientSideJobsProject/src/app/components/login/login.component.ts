import { Component } from '@angular/core';
import { User } from '../../models/user';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private loginService: LoginService){}

  username?: string;
  password?: string;
  user?: User;

  isPasswordValid(): boolean {
    if (!this.password) {
      return false; // Password is not provided
    }
    return this.password.trim().length >= 8 && !/\s/.test(this.password);
  }

  userExist(): void {
    if (!this.isPasswordValid()) {
      // Password is not valid, handle accordingly (e.g., show error message)
      return;
    }
    this.loginService.getUserByNameAndPassword(this.username, this.password).subscribe();
  }
}
