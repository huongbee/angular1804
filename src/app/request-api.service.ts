import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ServerResponse } from './types';

@Injectable()
export class RequestApiService {

  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  async getAllProduct(): Promise<Array<Product>>{
    return this.http.get(`${this.url}product`)
    .toPromise()
    .then((result: ServerResponse) => {
      return Promise.resolve(result.products);
    })
    .catch(err=> Promise.reject(err));
  }
}
