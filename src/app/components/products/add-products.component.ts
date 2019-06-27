import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../types';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./products.component.css']
})
export class AddProductsComponent implements OnInit {
  formAddProduct: FormGroup;
  isShowForm = false;
  
  constructor(private fb: FormBuilder, private store: Store<Product[]>) { 
    this.formAddProduct = this.fb.group({
      name: ['', Validators.required],
      price: ['0', Validators.required]
    });
  }

  ngOnInit() {
  }
  toggleForm(){
    this.isShowForm = !this.isShowForm;
  }
  addProduct(){
    const { name, price } = this.formAddProduct.value;
    const _id = Date.now().toString();
    const product: Product = { _id, name, price }
    this.store.dispatch({ type: 'ADD_PRODUCT', product })
    this.formAddProduct.setValue({name:'', price: '0'})
    this.toggleForm();
  }
}
