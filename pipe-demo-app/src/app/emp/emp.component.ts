import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {
  empData:any;
  constructor(private http:HttpClient){
    let EmpRestApi = this.http.get("http://localhost:8080/all");
    EmpRestApi.subscribe((x)=>this.empData=x);
  };

}
