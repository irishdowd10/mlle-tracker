import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'course-list',
  template: `
    <h3>Total Miles: {{totalMiles}} / 40</h3>
    <select (change)="onChange($event.target.value)">
      <option value="allCourses" selected="selected">All Courses</option>
      <option value="completedCourses">Completed Courses</option>
      <option value="incompleteCourses">Incomplete Courses</option>
    </select>
    <ul>
      <li [class]="priorityColor(currentCourse)" *ngFor="let currentCourse of childCourseList | status:filterByStatus">{{currentCourse.name}} | Mileage: {{currentCourse.mileage}} | {{currentCourse.type}} | <button (click)="editButtonHasBeenClicked(currentCourse)">Edit</button> |       <button *ngIf="currentCourse.haveRun === false" (click)="addMiles(currentCourse, true, currentCourse.mileage);">Run</button> </li>
    </ul>

    <ol>
      <li *ngFor="let currentCourse of childCourseList | status:filterByRun"> {{currentCourse.name}} | Mileage: {{currentCourse.mileage}}</li>
    </ol>
    <button (click)="reset()">Reset Week</button>
  `
})

export class CourseListComponent {
  filterByStatus: string = "allCourses";
  filterByRun: string = "completedCourses";
  totalMiles: number = 0;
  counter: number = 0;
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

  onChange(optionFromMenu) {
    this.filterByStatus = optionFromMenu;
  }
  toggleRan(clickedCourse: Course, Status: boolean) {
    clickedCourse.haveRun = Status;
  }

  addMiles(clickedCourse: Course, setStatus: boolean, mileage: number) {
    if (this.counter === 7) {
      return;
    }
    this.toggleRan(clickedCourse, setStatus);
    this.counter++;
    this.totalMiles += mileage;
    if (this.counter === 7 && this.totalMiles < 40)
    {
      console.log("You did not make your goal");
      return;
    }
    if (this.counter === 7 || this.totalMiles >= 40)
    {
      console.log("You made you're goal!")
      return;
    }
  }

  reset() {
    this.totalMiles = 0;
    this.counter = 0;
    for(var i = 0; i < this.childCourseList.length; i++) {
      this.childCourseList[i].haveRun = false;
    }
  }
}
