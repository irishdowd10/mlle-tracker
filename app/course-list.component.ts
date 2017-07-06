import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'course-list',
  template: `
    <select>
      <option value="allCourses">All Courses</option>
      <option value="completedCourses">Completed Courses</option>
      <option value="incompleteCourses">Incomplete Courses</option>
    </select>
    <ul>
      <li [class]="priorityColor(currentCourse)" *ngFor="let currentCourse of childCourseList">{{currentCourse.name}} | Mileage: {{currentCourse.mileage}} | {{currentCourse.type}} |  <button (click)="editButtonhasBeenClicked(currentCourse)">Edit</button></li>
    </ul>
  `
})

export class CourseListComponent {
  @Input() childCourseList: Course[];


  priorityColor(currentCourse) {
    if (currentCourse.difficulty === 3) {
      return "bg-danger";
    } else if (currentCourse.difficulty === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

}
