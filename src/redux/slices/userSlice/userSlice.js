import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    name: null,
    email: null,
    birthday: null,
    token: null,
    id: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.birthday = action.payload.birthday;
            state.token = action.payload.token;
            state.id = action.payload.id;

        },
        removeUser(state) {
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