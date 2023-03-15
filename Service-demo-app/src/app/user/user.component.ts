import { Component } from '@angular/core';
import {UserProductService} from '../user-product.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users:any;
  product:any;

  constructor(private user:UserProductService){
    this.users =[
      {"Id" : 123,
      "Name" : "abdul",
      "Email" : "abc@gmail.com"
  },
    {
      "Id":124,
      "Name":"ram",
      "Email":"ram@gmail.com"
  }
];
  }
  ngOnInit(){
    this.product = this.user.getProduct();
  }
  
}
