import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './types';

@Injectable()
export class RequestApiService {

  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getAllProduct(): Array<Product> {
    this.http.get(`${this.url}product`)
    .toPromise()
    .then(result => {
      return result;
    });
  }
}
