import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../../utils/localeStorage';

const initialState = getLocalStorage('user');

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signUp: (state, action) => ({ ...state, ...action.payload, email: '' }),
    logIn: (state, action) => ({ ...state, ...action.payload }),
    setUser: (state, action) => ({ ...state, ...action.payload }),
    logOut: (state) => ({ ...state, email: '' }),
  },
});

export const {
  signUp, logIn, logOut, setUser,
} = userSlice.actions;

export default userSlice.reducer;
