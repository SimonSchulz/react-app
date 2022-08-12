import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setStringSearch: (state, action) => action.payload,
  },
});
export const { setStringSearch } = searchSlice.actions;
export default searchSlice.reducer;
