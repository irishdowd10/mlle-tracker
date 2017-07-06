import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }    from '@angular/forms';
import { CourseListComponent } from './course-list.component';
import { EditCourseComponent } from './edit-course.component';
import { NewCourseComponent } from './new-course.component';
import { StatusPipe } from './status.pipe';
import { MileagePipe } from './mileage.pipe';


@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CourseListComponent, EditCourseComponent, NewCourseComponent, StatusPipe, MileagePipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {}
