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

}
