import type { CartItem } from './cartSlice';

const CART = 'CART';

export const getCart = (): CartItem[] => {
  const cartData = JSON.parse(localStorage.getItem(CART) || '[]') as CartItem[];
  return cartData;
};

export const saveCart = (products: CartItem[]) => {
  localStorage.setItem(CART, JSON.stringify(products));
};
