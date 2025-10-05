import { getPage, savePage } from '../localStorage';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type PaginationState = {
  page: number;
};

const initialState: PaginationState = {
  page: getPage(),
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    addPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
      savePage(state.page);
    },

    removePage: state => {
      state.page = 1;
      savePage(state.page);
    },
  },
});

export const { addPage, removePage } = paginationSlice.actions;

export default paginationSlice.reducer;
