import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './components/demo.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductComponent } from './components/product/product.component';
import { ParentComponent } from './components/interact/parent.component';
import { ChildComponent } from './components/interact/child.component';
import { AddProductComponent } from './components/product/add-product.component';
import { FilterProductComponent } from './components/product/filter-product.component';
import { ItemProductComponent } from './components/product/item-product.compoment';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers/index';
import { CounterComponent } from './components/counter/counter.component';
import { CounterActionComponent } from './components/counter/counter-action.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductsComponent } from './components/products/add-products.component';
import { FilterProductsComponent } from './components/products/filter-products.component';
import { ItemProductsComponent } from './components/products/item-products.component';



@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    SignupComponent,
    ProductComponent,
    ParentComponent,
    ChildComponent,
    AddProductComponent,
    FilterProductComponent,
    ItemProductComponent,
    CounterComponent,
    CounterActionComponent,
    ProductsComponent,
    AddProductsComponent,
    FilterProductsComponent,
    ItemProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      counter: counterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
