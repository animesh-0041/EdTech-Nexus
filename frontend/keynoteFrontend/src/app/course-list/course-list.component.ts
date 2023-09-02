import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const apiUrl = 'http://127.0.0.1:8000/api/courses';

    this.http.get(apiUrl).subscribe(
      (response: any) => {
       
        
        this.courses = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
