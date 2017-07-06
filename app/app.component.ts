import { Component } from '@angular/core';
import { Course } from './course.model';

@Component ({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1> Mile Tracker</h1>
      <h3> Date: {{month}}/{{day}}/{{year}}</h3>
    </div>

  <course-list [childCourseList]="masterCourseList" (clickSender)="editCourse($event)"></course-list>
  <hr>
  <h3>FOR ADMIN USE ONLY</h3>
  <edit-course [childSelectedCourse]="selectedCourse" (doneButtonClickedSender)="finishedEditing()"></edit-course>
  <new-course (newCourseSender) ="addCourse($event)"></new-course>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  masterCourseList: Course[] = [
    new Course("Mile Time Trial", "Track", 3, 1),
    new Course("Forest Park Loop", "Trail", 2, 8),
    new Course("Double Bridge Loop", "Pavement", 1, 6),
    new Course("PDX Half-Marathon", "Trail", 3, 13),
    new Course("Suvie Beach Route", "Sand", 2, 6),
    new Course("5 Mile Time Trial", "Track", 3, 5),
    new Course("Forest Loop", "Trail", 1, 3),
    new Course("5k Race", "Pavement", 3, 3),
    new Course("Newport Beach Loop", "Sand", 1, 4),
    new Course("City Block Run", "Pavement", 1, 8),
    new Course("Weekend Long Run", "Pavement", 3, 16)
  ];
  selectedCourse = null;

  editCourse(clickedCourse) {
    this.selectedCourse = clickedCourse;
  }

  finishedEditing() {
    this.selectedCourse = null;
  }

  addCourse(newCourseFromChild: Course) {
    this.masterCourseList.push(newCourseFromChild);
  }

}
