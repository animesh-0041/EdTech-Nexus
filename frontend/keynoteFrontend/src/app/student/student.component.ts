// student.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  courses: any[] = [];
  errorMessage!: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    const apiUrl = `http://127.0.0.1:8000/api/courses/`;

    this.http.get(apiUrl).subscribe(
      (response: any) => 
      {
        // console.log(response);
        this.courses = response.courses.reverse(); // Store course data
      },
      (error) => {
        this.errorMessage = 'An error occurred while fetching courses';
        console.error(error);
      }
    );
  }

  enroll(course: any): void {
    // Handle the enrollment logic here
    const userDataString =localStorage.getItem('user')
    const userData = JSON.parse(userDataString ?? '{}');
    const student_id=userData.id
    const student_name=userData.name
    const apiUrl = `http://127.0.0.1:8000/api/student/course/create/`;
    const data={...course,student_id,student_name}
    // console.log(course.course_code);
    
    this.http
    .post(apiUrl, 
     data
    )
    .subscribe(
      (response: any) => {
        // Handle the enrollment success response here
       alert(`Enrolled in course ${course.course_name}`);
      },
      (error) => {
        // Handle errors, e.g., display an error message
        console.error('Enrollment failed', error);
        alert("Please try again")
      }
    );
  }
}
