import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {}; // Initialize user object

  ngOnInit(): void {
    // Retrieve user details from local storage
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }
}
