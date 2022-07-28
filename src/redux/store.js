import { configureStore } from '@reduxjs/toolkit';
import {apiSlice} from "./slices/api/apiSlice";
import userReducer from './slices/userSlice/userSlice';
const store = configureStore({
    reducer: {user: userReducer,[apiSlice.reducerPath]: apiSlice.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})
export default store;