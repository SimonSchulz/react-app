import { createSlice } from '@reduxjs/toolkit';
import {getLocalStorage} from "../../../utils/localeStorage";
const initialState =  getLocalStorage("history");
console.log(getLocalStorage("history"))
const historySlice = createSlice({
    name: 'history',
    initialState: initialState,
    reducers: {
        addId : (state, action) => ({...state, ids:[action.payload, ...state.ids]}),
        addStringSearch:(state, action) => ({...state, search:[action.payload, ...state.search]}),
        clearHistory:()=>({ids:[], search:[]}),
    },
});

export const {addId,addStringSearch,clearHistory} = historySlice.actions;

export default historySlice.reducer;