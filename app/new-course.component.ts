import { Component, Output, EventEmitter} from '@angular/core';
import { Course } from './course.model';

@Component ({
  selector: 'new-course',
  template: `
<h1> New Course </h1>
<div>
<h3> Enter Course Information</h3>
<label>Name</label>
<input #newName>
<label>Type</label>
<input #newType>
<label>Mileage</label>
<input #newMileage>
</div>
<div>
<label> Course Difficulty: </label>
<select #newDifficulty>
 <option [value]="1"> Easy </option>
 <option [value]="2"> Moderate </option>
 <option [value]="3"> Hard </option>
</select>
 <button (click)="submitForm(newName.value, newType.value, newMileage.value, newDifficulty.value); newName.value=''; newType.value=''; newMileage.value='';">Add</button>
</div>
`
})

export class NewCourseComponent {
  @Output() newCourseSender = new EventEmitter();

  submitForm(name: string, type: string, mileage: number, difficulty: number){
    var newMileage: number = +mileage
    var newDifficulty: number = +difficulty
    var newCourseToAdd: Course = new Course(name, type, newDifficulty, newMileage);
    this.newCourseSender.emit(newCourseToAdd);
  }
}
