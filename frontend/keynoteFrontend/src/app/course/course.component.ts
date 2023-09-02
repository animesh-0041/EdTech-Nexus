import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  showForm = false;
  successMessage = '';
  instructorName!: string; // Property to store the instructor's name
  instructorId!: number;
  courseData: any = {}; // Declare the courseData property here
  errorMessage!: string;
  courses: any[] = [];

  constructor(private apiService: ApiService,private http: HttpClient) {}

  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
    this.successMessage = ''; // Clear success message when closing form
    this.courseData = {}; // Clear form data when closing form
  }

  ngOnInit() {
    // Retrieve user data from local storage and set instructorName and instructorId
    const userDataString = localStorage.getItem('user');
    const userData = JSON.parse(userDataString ?? '{}');
    this.instructorName = userData.name;
    this.instructorId = userData.id;
    this.fetchCourses();
    
  }

  submitForm() {
    const userDataString = localStorage.getItem('user');
    const userData = JSON.parse(userDataString ?? '{}');
    this.courseData.instructor_name=userData.name
    this.courseData.instructor_id=userData.id
    this.courseData.course_code=Math.floor(1000 + Math.random() * 9000);
    // console.log(this.courseData);
    const apiUrl = 'http://127.0.0.1:8000/api/courses/create/';
    
    this.http.post(apiUrl, this.courseData).subscribe(
      (response: any) => {
        this.successMessage = 'Course created successfully';
        this.errorMessage = ''; // Clear any previous error messages
        // this.toastr.success('Course created successfully', 'Success');
        this.closeForm()
      },
      (error) => {
        this.errorMessage = 'An error occurred while creating the course';
        console.error(error);
      }
    );
  }




  fetchCourses() {
    const apiUrl = 'http://127.0.0.1:8000/api/courses';

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        this.courses = response; // Store course data
      },
      (error) => {
        this.errorMessage = 'An error occurred while fetching courses';
        console.error(error);
      }
    );
  }
}
