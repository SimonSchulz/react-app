import { createSlice } from '@reduxjs/toolkit';

const initialState = 1;

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state, action) => action.payload,
    setDefault: () => initialState,
  },
});

export const { setPage, setDefault } = pageSlice.actions;

export default pageSlice.reducer;
