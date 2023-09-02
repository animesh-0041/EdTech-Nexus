import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api/user/';
  private courseApiUrl = 'http://127.0.0.1:8000/api/courses/';

  constructor(private http: HttpClient) {}

  getUserData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  createCourse(courseData: any): Observable<any> {
    return this.http.post(this.courseApiUrl + 'create/', courseData);
  }
}


