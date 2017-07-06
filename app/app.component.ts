import { Component } from '@angular/core';
import { Course } from './course.model';

@Component ({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1> Mile Tracker for {{month}}/{{day}}/{{year}}</h1>

  <course-list [childCourseList]="masterCourseList"></course-list>
  <hr>
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
    new Course("Weekend Long Run", "Pavement", 2, 16)
  ];

}
