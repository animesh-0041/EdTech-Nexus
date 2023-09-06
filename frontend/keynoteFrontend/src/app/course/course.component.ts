import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Course } from './course.model';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  showForm = false;
  showEditForm = false; // Initially hidden
  successMessage = '';
  instructorName!: string; // Property to store the instructor's name
  instructorId!: number;
  courseData: any = {}; // Declare the courseData property here
  errorMessage!: string;
  courses: any[] = [];

  constructor(private apiService: ApiService,private http: HttpClient,) {}

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
    
    const userDataString =localStorage.getItem('user')
    const userData = JSON.parse(userDataString ?? '{}');
    this.instructorName = userData.name;
    this.instructorId = userData.id;
    this.fetchCourses(userData.id);
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
        const userDataString = localStorage.getItem('user');
        const userData = JSON.parse(userDataString ?? '{}');
        this.fetchCourses(userData.id)
      },
      (error) => {
        this.errorMessage = 'An error occurred while creating the course';
        console.error(error);
      }
      );
     
  }




  fetchCourses(id:any) {
    const apiUrl = `http://127.0.0.1:8000/api/courses?instructor_id=${id}`;

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

  onDeleteCourse(id: number) {
    const apiUrl = `http://127.0.0.1:8000/api/courses/delete/${id}/`;

    this.http.delete(apiUrl).subscribe(
      () => {
        console.log('Course deleted successfully');
        // You can also update the UI to remove the deleted course
        this.courses = this.courses.filter((course) => course.id !== id);
        alert(`Course deleted successfully!`)
      },
      (error) => {
        console.error('Error deleting course:', error);
      }
    );
  }

//edit

onEditCourse(course: Course) {
  this.showEditForm = true;
  this.courseData = { ...course }; // Pre-fill the form with course details
}
// Function to close the edit form
closeEditForm() {
  this.showEditForm = false;
  this.courseData = {}; // Clear the courseData
}

submitEditForm() {
  // Get the course ID of the course being edited
  const courseId = this.courseData.id; // Replace 'id' with your actual course ID property name
  const userDataString = localStorage.getItem('user');
  const userData = JSON.parse(userDataString ?? '{}');

  // Make an HTTP PATCH request to your API to update the course data
  this.http.patch(`http://127.0.0.1:8000/api/courses/edit/${courseId}/`, this.courseData).subscribe(
    (response: any) => {
      // Handle the success response
      this.successMessage = 'Course updated successfully';
      alert("Course updated successfully")
      this.closeEditForm()
      this.fetchCourses(userData.id)
      // Optionally, close the edit form here
    },
    (error) => {
      // Handle errors from the API
      this.errorMessage = 'Error updating course';
      alert("Please try again!")
    }
  );
}

}
