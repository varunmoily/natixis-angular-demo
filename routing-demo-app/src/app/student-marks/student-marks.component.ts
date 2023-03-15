import { Component } from '@angular/core';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.css']
})
export class StudentMarksComponent {
  marks:any;

  constructor(){
    this.marks = [{
      "id" : 7,
      "name" : "varun",
      "marks" : 56
    },
    {
      "id" : 4,
      "name" : "sumanth",
      "marks" : 76
    },
    {
      "id" : 2,
      "name" : "ujwal",
      "marks" : 86
    }
  ];
  }

}
