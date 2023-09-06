import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './course/course.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { StudentNavbarComponent } from './student-navbar/student-navbar.component';
import { EnrolledComponent } from './enrolled/enrolled.component';
import { ProfileComponent } from './profile/profile.component';
import { AssignmentComponent } from './assignment/assignment.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CourseComponent,
    NavbarComponent,
    StudentComponent,
    StudentNavbarComponent,
    EnrolledComponent,
    ProfileComponent,
    AssignmentComponent,
   
 
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
