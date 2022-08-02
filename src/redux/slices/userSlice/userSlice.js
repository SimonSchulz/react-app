import {createSlice} from '@reduxjs/toolkit';
import {getLocalStorage} from "../../../utils/localeStorage";

const initialState = getLocalStorage("user")?.name ? getLocalStorage('user'):{ isAuth: '', name: '',  email: '', birthday: '',  token: '', id: ''};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser:(state, action)=>({...state,...action.payload}),
        removeUser:(state ) =>   state=initialState,
    },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;