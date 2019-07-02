import { Component, OnInit } from '@angular/core';
import { Product } from '../../types';
import { RequestApiService } from '../../request-api.service';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-api',
  templateUrl: './product-api.component.html',
  styleUrls: ['./product-api.component.css']
})
export class ProductApiComponent implements OnInit {

  products: Array<Product>;
  formAdd: FormGroup;

  constructor(
    private requestService: RequestApiService,
    private store: Store<Product[]>,
    private fb: FormBuilder
  ) {
    this.formAdd = this.fb.group({
      name: ['', Validators.required],
      price: ['0', Validators.required],
    })

    this.requestService.getAllProduct()
    .then((data: Array<Product>)=>{
      this.store.dispatch({ type: 'INIT_PRODUCT', products: data })
      
      this.store.select('productApi').subscribe(arrayProduct => this.products = arrayProduct);
      console.log(this.products)
    })
  }

  ngOnInit() {
  }

}
