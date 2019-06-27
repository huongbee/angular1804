import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./products.component.css']
})
export class AddProductsComponent implements OnInit {
  formAddProduct: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
