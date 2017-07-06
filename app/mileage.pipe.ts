import {Pipe, PipeTransform} from '@angular/core';
import {Course} from './course.model';

@Pipe ({
  name: "mileage",
  pure: false
})

export class MileagePipe implements PipeTransform {
  transform(input: Course[], totalMileage, counter){
    var output: Course[] = [];
    for (var i = 0; i < input.length; i++) {
      if (totalMileage < 40 && counter === 6 && (input[i].mileage + totalMileage) >= 40 && input[i].haveRun === false) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
