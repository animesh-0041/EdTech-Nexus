import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';


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
    path:'course'
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
