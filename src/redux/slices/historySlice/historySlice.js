import { createSlice } from '@reduxjs/toolkit';
const initialState = {ids:[],search:[]}

const historySlice = createSlice({
    name: 'history',
    initialState: initialState,
    reducers: {
        addId : (state, action) => ({...state, ids:[action.payload, ...state.ids]}),
        addStringSearch:(state, action) => ({...state, search:[action.payload, ...state.search]}),
        clearHistory:()=>initialState,
    },
});

export const {addId,addStringSearch,clearHistory} = historySlice.actions;

export default historySlice.reducer;