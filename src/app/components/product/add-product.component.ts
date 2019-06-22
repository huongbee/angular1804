import { Component, OnInit, Input } from '@angular/core';
import { Product, listProduct } from '../../types';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./product.component.css']
})
export class AddProductComponent implements OnInit {

  formAddProduct: FormGroup;
  @Input() isShowForm: boolean;
  @Input() products: Array<Product>;

  constructor(private fb: FormBuilder) {
    this.formAddProduct = this.fb.group({
      name: ['', Validators.required],
      price: ['0', Validators.required]
    });
  }

  ngOnInit() {
  }
  toggleForm() {
    this.isShowForm = !this.isShowForm;
  }
  addProduct() {
    const { name, price } = this.formAddProduct.value;
    const id = Date.now().toString();
    const product: Product = { _id: id, name, price };
    this.products.unshift(product);
    this.formAddProduct.setValue({name: '', price: '0'});
    this.toggleForm();
  }
}
