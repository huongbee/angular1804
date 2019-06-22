import { Component, OnInit } from '@angular/core';
import { Product, listProduct } from '../../types';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./product.component.css']
})
export class ItemProductComponent implements OnInit {

  arrayProduct: Product[] = listProduct;

  constructor() {
  }

  ngOnInit() {
  }
}
