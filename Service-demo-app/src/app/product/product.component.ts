import { Component } from '@angular/core';
import {UserProductService} from '../user-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product:any;

  constructor(user_product_service:UserProductService){
    this.product= user_product_service.getProduct();
    }
  }


