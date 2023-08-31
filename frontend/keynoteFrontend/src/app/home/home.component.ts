import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  formData: any = {};
  registrationSuccess = false;

  constructor(private http: HttpClient,private router: Router) {}
  

  submitForm() {
    const apiUrl = 'http://127.0.0.1:8000/api/user/';

    this.http.post(apiUrl, this.formData).subscribe(
      (response) => {
        this.registrationSuccess = true;
        this.formData = {}; // Clear form data after successful registration
        this.router.navigate(['/']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
