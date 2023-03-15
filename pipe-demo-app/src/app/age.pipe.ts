import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    console.log(value);
    let currentDate = new Date().getFullYear();
    let dobYear = new Date(value).getFullYear();
    let ageVal = currentDate - dobYear;
    return ageVal;
  }

}
