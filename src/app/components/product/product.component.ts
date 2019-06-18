import { Component, OnInit } from '@angular/core';
import { Product, listProduct } from '../../types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  arrayProduct: Product[] = listProduct;
  isShowForm = false;

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
  setWishlist(id: string) {
    const product = this.arrayProduct.find(p => p._id === id);
    if (!product) {
      return alert('Cannot find product!');
    }
    product.wishlist = !product.wishlist;
  }
  toggleForm(): boolean {
    return this.isShowForm = !this.isShowForm;
  }
}
