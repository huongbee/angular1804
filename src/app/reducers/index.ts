import { Action } from '@ngrx/store';
import { Product, listProduct } from '../types';

// state must be pure
export function counterReducer(state: number = 0, action: Action) {
  if (action.type === 'INCREASE') {
    return state + 1;
  }
  if (action.type === 'DECREASE') {
    return state - 1;
  }
  if (action.type === 'RESET') {
    return 0;
  }
  return state;
}

export function productReducer(state: Array<Product> = listProduct, action: Action): Array<Product> {
  if (action.type === 'ADD_PRODUCT') return ;
  if(action.type === 'REMOVE_PRODUCT') return ;
  if(action.type === 'FILTER_PRODUCT') return ;
  if(action.type === 'SET_WISHLIST_PRODUCT') return ;
  return state;
}
