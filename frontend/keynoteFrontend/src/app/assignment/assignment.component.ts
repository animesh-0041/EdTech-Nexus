import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  assignmentTitle = '';
  assignmentDescription = '';
  assignmentDeadline = '';
  selectedCourse = '';

  courses: any[] = []; // Populate this with available courses

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const userDataString =localStorage.getItem('user')
    const userData = JSON.parse(userDataString ?? '{}');
    this.fetchCourses(userData.id);
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
        // this.errorMessage = 'An error occurred while fetching courses';
        console.error(error);
      }
    );
  }
  addAssignment(): void {
    // Implement the logic to add an assignment here
   
    
   
    
    const newAssignment = {
      title: this.assignmentTitle,
      description: this.assignmentDescription,
      deadline: this.assignmentDeadline,
      course: this.selectedCourse,
      // Add other properties as needed
    };

    // // Send a POST request to your API endpoint to add the assignment
    // this.http.post('http://localhost:8000/api/assignments/create/', newAssignment).subscribe(
    //   (response: any) => {
    //     // Handle the success response here
    //     console.log('Assignment added successfully', response);
    //   },
    //   (error) => {
    //     // Handle errors, e.g., display an error message
    //     console.error('Error adding assignment', error);
    //   }
    // );
  }
}
