import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../../utils/localeStorage';

const initialState = getLocalStorage('order');

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state, action) => [...state, action.payload],
    removeOrder: (state, action) => state.filter((i) => i !== action.payload),
  },
});

export const { setOrder, removeOrder } = orderSlice.actions;

export default orderSlice.reducer;
