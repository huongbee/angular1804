import { Component, OnInit } from '@angular/core';
import { Product } from '../../types';
import { RequestApiService } from '../../request-api.service';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-product-api',
  templateUrl: './product-api.component.html',
  styleUrls: ['./product-api.component.css']
})
export class ProductApiComponent implements OnInit {

  products: Array<Product>;

  constructor(
    private requestService: RequestApiService,
    private store: Store<Product[]>
  ) {
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
