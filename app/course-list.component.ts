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
      <li [class]="priorityColor(currentCourse)" *ngFor="let currentCourse of childCourseList">{{currentCourse.name}} | Mileage: {{currentCourse.mileage}} | {{currentCourse.type}} |  <button (click)="editButtonHasBeenClicked(currentCourse)">Edit</button></li>
    </ul>
  `
})

export class CourseListComponent {
  @Input() childCourseList: Course[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(courseToEdit: Course) {
    this.clickSender.emit(courseToEdit);
  }

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
