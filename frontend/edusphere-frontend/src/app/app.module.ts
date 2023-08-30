import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstructorManagementComponent } from './instructor-management/instructor-management.component';
import { CourseManagementComponent } from './course-management/course-management.component';

@NgModule({
  declarations: [
    AppComponent,
    InstructorManagementComponent,
    CourseManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
