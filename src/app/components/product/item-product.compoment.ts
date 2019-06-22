import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../types';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./product.component.css']
})
export class ItemProductComponent implements OnInit {

  @Input() arrayProduct: Product[];

  constructor() {
  }

  ngOnInit() {
  }
}
