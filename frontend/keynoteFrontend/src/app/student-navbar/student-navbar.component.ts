import { Component } from '@angular/core';

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})
export class StudentNavbarComponent {
  getUserName(): string | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).name : null;
  }
  getUserEmail(): string | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).email : null;
  }
}
