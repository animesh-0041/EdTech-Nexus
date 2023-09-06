import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './course/course.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './auth.guard';
import { StudentComponent } from './student/student.component';
import { EnrolledComponent } from './enrolled/enrolled.component';
import { ProfileComponent } from './profile/profile.component';
import { AssignmentComponent } from './assignment/assignment.component';


const routes: Routes = [
  {
    component:HomeComponent,
    path:'register'
  },
  {
    component:LoginComponent,
    path:''
  },
  {
    component:CourseComponent,
    path:'instructor/course',
    canActivate:[AuthGuard]
  },
  {
    component:StudentComponent,
    path:'student/course',
    canActivate:[AuthGuard]
  },
  {
    component:EnrolledComponent,
    path:'student/enrolled',
    canActivate:[AuthGuard]
  },
 
  {
    component:ProfileComponent,
    path:'profile',
    canActivate:[AuthGuard]
  },
  {
    component:AssignmentComponent,
    path:'instructor/assignment',
    canActivate:[AuthGuard]
  }
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
