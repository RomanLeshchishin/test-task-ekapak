import { getCategory, saveCategory } from './localStorage';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ICategoryItem } from '@/interfaces/ICategory';

type CategoryState = {
  category: ICategoryItem;
};

const initialState: CategoryState = {
  category: getCategory(),
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<ICategoryItem>) => {
      state.category = action.payload;
      saveCategory(state.category);
    },

    removeCategory: state => {
      state.category = { id: '', name: '' } as ICategoryItem;
      saveCategory(state.category);
    },
  },
});

export const { addCategory, removeCategory } = categorySlice.actions;

export default categorySlice.reducer;
