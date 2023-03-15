import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products:any;
  constructor(){
    this.products=[{
      Id:123,
      Name:"ujwal",
      price:50000
    },
    {
      Id:124,
      Name:"sandesh",
      price:60000

    },
    {
      Id:125,
      Name:"sumanth",
      price:70000

    }];
  }
}
