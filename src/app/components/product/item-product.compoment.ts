import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../types';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./product.component.css']
})
export class ItemProductComponent implements OnInit {

  @Input() arrayProduct: Product[];
  @Input() filterMode: string;

  constructor() {
  }

  ngOnInit() {
  }
  removeProduct(id: string) {
    const index = this.arrayProduct.findIndex(p => p._id === id);
    if (index < 0) {
      alert('Cannot find product!');
      return;
    }
    this.arrayProduct.splice(index, 1);
  }
  setWishlist(id: string) {
    const product = this.arrayProduct.find(p => p._id === id);
    if (!product) {
      alert('Cannot find product!');
      return;
    }
    product.wishlist = !product.wishlist;
  }
  get productFilter(): Array<Product> {
    if (this.filterMode === 'SHOW_WISHLIST') {
      return this.arrayProduct.filter(e => e.wishlist);
    }
    if (this.filterMode === 'NONE_WISHLIST') {
      return this.arrayProduct.filter(e => !e.wishlist);
    }
    return this.arrayProduct;
  }
}
