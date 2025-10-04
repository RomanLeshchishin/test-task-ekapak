import type { ICartItem } from '@/interfaces/ICart';
import { getCart, saveCart } from './localStorage';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type CartState = {
  cartItems: ICartItem[];
};

const initialState: CartState = {
  cartItems: getCart(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartItem>) => {
      state.cartItems = [...state.cartItems, action.payload];
      saveCart(state.cartItems);
    },

    removeItem: (state, action: PayloadAction<string>) => {
      const index = state.cartItems.findIndex(item => item.id === action.payload);

      if (index !== -1) {
        state.cartItems = [...state.cartItems.slice(0, index), ...state.cartItems.slice(index + 1)];
      }

      saveCart(state.cartItems);
    },

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const index = state.cartItems.findIndex(item => item.id === action.payload);
      const cartItem = state.cartItems[index];

      if (index !== -1) {
        const newItem = { ...cartItem, quantity: (cartItem.quantity += 1) } as ICartItem;
        state.cartItems = [...state.cartItems.slice(0, index), newItem, ...state.cartItems.slice(index + 1)];
      }

      saveCart(state.cartItems);
    },

    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const index = state.cartItems.findIndex(item => item.id === action.payload);
      const cartItem = state.cartItems[index];

      if (index !== -1 && cartItem.quantity > cartItem.minPurchase) {
        const newItem = { ...cartItem, quantity: (cartItem.quantity -= 1) } as ICartItem;
        state.cartItems = [...state.cartItems.slice(0, index), newItem, ...state.cartItems.slice(index + 1)];
      }

      saveCart(state.cartItems);
    },

    clearCart: state => {
      state.cartItems = [];
      saveCart(state.cartItems);
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
