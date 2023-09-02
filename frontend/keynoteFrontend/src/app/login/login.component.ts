import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

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

  constructor(private apiService: ApiService,private router: Router) {}

  login() {
    this.apiService.getUserData().subscribe(
      users => {
        const matchedUser = users.find(user => user.email === this.email && user.password === this.password);

        if (matchedUser) {
          
          
          localStorage.setItem('user', JSON.stringify(matchedUser));
          this.errorMessage = '';
          this.successMessage = 'Login successful!';
          this.router.navigate(['course']);
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
