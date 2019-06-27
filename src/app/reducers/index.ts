import { Action } from '@ngrx/store';
import { Product, listProduct } from '../types';

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

// state must be pure
export function productReducer(
  state: Array<Product> = listProduct,
  action: any
): Array<Product> {
  if (action.type === 'ADD_PRODUCT')
    return [ action.product, ...state ];
  if(action.type === 'REMOVE_PRODUCT')
    return state.filter(element => element._id !== action._id )
  if(action.type === 'FILTER_PRODUCT')
    return ;
  if(action.type === 'SET_WISHLIST_PRODUCT')
    return state.map(element=> {
      if(element._id === action._id)
        element.wishlist = !element.wishlist;
      return element;
    })
  return state;
}
