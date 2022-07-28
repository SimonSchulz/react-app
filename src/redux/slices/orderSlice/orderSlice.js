import { createSlice } from '@reduxjs/toolkit';
const initialState = [];

const orderSlice = createSlice({
    name: 'order',
    initialState: initialState,
    reducers: {
        setOrder : (state, action) => [...state, action.payload],
        removeOrder:(state, action) => state.filter(i => i!==action.payload),
    },
});

export const {setOrder,removeOrder} = orderSlice.actions;

export default orderSlice.reducer;