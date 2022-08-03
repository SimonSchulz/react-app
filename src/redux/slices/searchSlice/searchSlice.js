import { createSlice } from '@reduxjs/toolkit';
const initialState = "";

const searchSlice = createSlice({
    name: 'search',
    initialState: initialState,
    reducers: {
        searchReducer:(state, action)=> action.payload,
    },
});
export const {searchReducer} = searchSlice.actions;
export default searchSlice.reducer;