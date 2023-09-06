import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enrolled',
  templateUrl: './enrolled.component.html',
  styleUrls: ['./enrolled.component.css']
})
export class EnrolledComponent implements OnInit {
  enrolledCourses: any[] = [];
  studentId: number = 0; // Assign the student's ID here

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCoursesByStudentId();
  }

  getCoursesByStudentId(): void {
    const userDataString =localStorage.getItem('user')
    const userData = JSON.parse(userDataString ?? '{}');
    const apiUrl = `http://localhost:8000/api/student/course/?student_id=${userData.id}`;

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        console.log(response);
        
        this.enrolledCourses = response.courses;
      },
      (error) => {
        console.error('Error fetching enrolled courses', error);
      }
    );
  }
}
