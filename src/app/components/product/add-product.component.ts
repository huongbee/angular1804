import { Component, OnInit } from '@angular/core';
import { Product, listProduct } from '../../types';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./product.component.css']
})
export class AddProductComponent implements OnInit {

  formAddProduct: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formAddProduct = this.fb.group({
      name: ['', Validators.required],
      price: ['0', Validators.required]
    });
  }

  ngOnInit() {
  }
  toggleForm() {

  }
}
