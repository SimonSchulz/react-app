import {createSlice} from '@reduxjs/toolkit';
import {getLocalStorage} from "../../../utils/localeStorage";

const initialState = getLocalStorage("user");

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser:(state, action)=>({ ...state, ...action.payload}),
        removeUser:(state) =>{
            state.name = null;
            state.email = null;
            state.birthday = null;
            state.token = null;
            state.id = null;
        },
    },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;