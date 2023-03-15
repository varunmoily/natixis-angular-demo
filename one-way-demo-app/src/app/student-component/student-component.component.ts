import { Component } from '@angular/core';
import {student} from './student'

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent {
  varun:student={
    id:123,
    name:"abdul",
    marks:88,
    fees:35000
  };
}
