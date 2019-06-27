import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/types';

@Component({
  selector: 'app-item-products',
  templateUrl: './item-products.component.html',
  styleUrls: ['./products.component.css']
})
export class ItemProductsComponent implements OnInit {
  products: Array<Product>;

  constructor(private store: Store<Product[]>) {
    this.store.select('product')
    .subscribe(array => this.products = array );
  }

  ngOnInit() {
  }

  removeProduct(id: string){
    this.store.dispatch({ type: 'REMOVE_PRODUCT', _id: id });
  }
  setWishlist(id: string){
    this.store.dispatch({ type: 'SET_WISHLIST_PRODUCT', _id: id });
  }
}