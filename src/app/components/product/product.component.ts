import { Component, OnInit } from '@angular/core';
import { Product, listProduct } from '../../types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  arrayProduct: Product[] = listProduct;
  constructor() { }

  ngOnInit() {
  }
  removeProduct(id: string) {
    const index = this.arrayProduct.findIndex(product => product._id === id);
    if (index >= 0) {
      return this.arrayProduct.splice(index, 1);
    }
    return alert('Can not find product!');
  }

}
