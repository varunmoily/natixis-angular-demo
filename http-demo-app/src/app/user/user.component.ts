import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  userData:any;
  searchVal:string="";
  searchVal2:string="";

  constructor(private http:HttpClient){
  }
  postData(){
    console.log("user got clicked......"+this.searchVal+this.searchVal2);

    let clientData = this.http.get("http://localhost:8080/search",{params:{"marks":this.searchVal,"fees":this.searchVal2}});
    clientData.subscribe((data)=> this.userData=data);
  }
  

}
