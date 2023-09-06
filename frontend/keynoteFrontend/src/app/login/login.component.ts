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
          console.log(matchedUser);
          
          // this.router.navigate(['course']);



          // Check the user's role and navigate accordingly
          if (matchedUser.user_type === 'instructor') {
            this.router.navigate(['instructor/course']);
          } else if (matchedUser.user_type === 'student') {
            this.router.navigate(['student/course']);
          }
        }
        
        
        
        
        else {
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
