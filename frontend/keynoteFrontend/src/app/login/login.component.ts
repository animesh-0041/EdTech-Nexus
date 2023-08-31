import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';
  successMessage = '';

  constructor(private apiService: ApiService) {}

  login() {
    this.apiService.getUserData().subscribe(
      users => {
        const matchedUser = users.find(user => user.email === this.email && user.password === this.password);

        if (matchedUser) {
          this.errorMessage = '';
          this.successMessage = 'Login successful!';
        } else {
          this.errorMessage = 'Wrong credentials';
          this.successMessage = '';
        }
      },
      error => {
        console.error(error);
        this.errorMessage = 'Error fetching user data';
        this.successMessage = '';
      }
    );
  }
}
