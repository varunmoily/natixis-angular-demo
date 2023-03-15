import { Component } from '@angular/core';

@Component({
  selector: 'app-student-fee',
  templateUrl: './student-fee.component.html',
  styleUrls: ['./student-fee.component.css']
})
export class StudentFeeComponent {
  fee:any;

  constructor(){
    this.fee = [{
      "id" : 7,
      "name" : "varun",
      "fee" : 56000
    },
    {
      "id" : 4,
      "name" : "sumanth",
      "fee" : 76000
    },
    {
      "id" : 2,
      "name" : "ujwal",
      "fee" : 86000
    }
  ];
  }


}
