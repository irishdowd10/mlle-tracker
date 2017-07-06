import {Pipe, PipeTransform} from '@angular/core';
import {Course} from './course.model';

@Pipe ({
  name: "status",
  pure: false
})

export class StatusPipe implements PipeTransform {
  transform(input: Course[], desiredStatus) {
    var output: Course[] = [];
    if (desiredStatus === "incompleteCourses") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].haveRun === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredStatus === "completedCourses") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].haveRun === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
