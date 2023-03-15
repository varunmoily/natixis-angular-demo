import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName:string="";
  password:string="";
  errorMessage:string="";

  constructor(private router:Router,private http:HttpClient){
  
  }
  submit(){
    let userData=this.http.get("http://localhost:8080/all");
    userData.subscribe((x)=>this.userName="x");
    userData.subscribe((x)=>this.password="x");

    
    if((this.userName == "Abdul")&&(this.password =="1234")){
      this.router.navigateByUrl("/home");
    }
    else{
      this.errorMessage = "credentials are not correct";
      this.userName = "";
      this.password = "";
    }
  
  }

}
