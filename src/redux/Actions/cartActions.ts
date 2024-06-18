import { Products } from "../../types/products";

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY';

export const addProductToCart = (product: Products, quantity: number) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: {product, quantity} 
});

export const removeProductFromCart = (sku: string) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: sku,
});

export const updateProductQuantity = (sku: string, quantity: number) => ({
  type: UPDATE_PRODUCT_QUANTITY,
  payload: { sku, quantity },
});
