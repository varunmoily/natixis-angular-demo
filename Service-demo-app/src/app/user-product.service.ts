import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProductService {
  getProduct(){
    return[{
      "ProductName":"vivo",
      "ProductPrice":5000
    },
    {
      "ProductName":"apple",
      "ProductPrice":45000
    }
  ]
    
  }

  constructor() { }
}
