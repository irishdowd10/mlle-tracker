import { Component, Input,Output, EventEmitter} from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'edit-course',
  template: `
  <div>
    <div *ngIf="childSelectedCourse">
      <h3>{{childSelectedCourse.name}}</h3>
      <h3>{{childSelectedCourse.haveRun}}</h3>
      <h4>Edit Course</h4>
      <label>Course Name</label>
      <input [(ngModel)]="childSelectedCourse.name">
      <label>Course Type (Sand, Track, Trail, etc)</label>
      <input [(ngModel)]="childSelectedCourse.type">
      <label>Enter Course Difficulty (1-3):</label>
      <br>
      <input type="radio" [(ngModel)]="childSelectedCourse.difficulty" [value]="1">1 (Easy Difficulty)<br>
      <input type="radio" [(ngModel)]="childSelectedCourse.difficulty" [value]="2">2 (Medium Difficulty)<br>
      <input type="radio" [(ngModel)]="childSelectedCourse.difficulty" [value]="3">3 (Hard Difficulty)
      <label>Course Mileage</label>
      <input [(ngModel)]="childSelectedCourse.mileage">
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  </div>
      `
})

export class EditCourseComponent {
  @Input() childSelectedCourse: Course;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
