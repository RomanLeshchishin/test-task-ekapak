import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import categoryReducer from './slices/categorySlice';
import paginationReducer from './slices/paginationSlice';

export const store = configureStore({
  reducer: { cartReducer, categoryReducer, paginationReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
