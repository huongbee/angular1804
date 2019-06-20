import { Component, OnInit } from '@angular/core';
import { Product, listProduct } from '../../types';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  arrayProduct: Product[] = listProduct;
  isShowForm = false;
  formAddProduct: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formAddProduct = this.fb.group({
      name: ['', Validators.required],
      price: ['0', Validators.required]
    });
  }

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
  addProduct() {
    const { name, price } = this.formAddProduct.value;
    const id = Date.now().toString();
    const product: Product = { _id: id, name, price };
    this.arrayProduct.unshift(product); // add first
    this.toggleForm(); // hide form
    this.formAddProduct.setValue({ name: '', price: '0'}); // clear value
  }
}
