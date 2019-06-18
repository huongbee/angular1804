export interface Product {
    _id: string;
    name: string;
    price: number;
    wishlist?: boolean;
}

export const listProduct: Array<Product> = [
    { _id: '1', name: 'Samsung Galaxy S9', price: 15000000, wishlist: true },
    { _id: '2', name: 'Iphone Xs 64GB Gray', price: 25000000, wishlist: true },
    { _id: '3', name: 'Apple Watch', price: 35000000, wishlist: false }
];
