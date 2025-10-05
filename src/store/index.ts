import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import categoryReducer from './categorySlice';
import paginationReducer from './paginationSlice';

export const store = configureStore({
  reducer: { cartReducer, categoryReducer, paginationReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
