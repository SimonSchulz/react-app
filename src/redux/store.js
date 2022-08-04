import { configureStore } from '@reduxjs/toolkit';
import {apiSlice} from "./slices/api/apiSlice";
import userReducer from './slices/userSlice/userSlice';
import historyReducer from './slices/historySlice/historySlice';
import orderReducer from "./slices/orderSlice/orderSlice";
import searchReducer from "./slices/searchSlice/searchSlice";
import {userToLocalStorageMiddleware} from "./slices/userSlice/userMiddleWare";
const store = configureStore({
    reducer: {userReducer, orderReducer,searchReducer,historyReducer,[apiSlice.reducerPath]: apiSlice.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware, userToLocalStorageMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
