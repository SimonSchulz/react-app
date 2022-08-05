import { configureStore } from '@reduxjs/toolkit';
import {apiSlice} from "./slices/api/apiSlice";
import userReducer from './slices/userSlice/userSlice';
import historyReducer from './slices/historySlice/historySlice';
import orderReducer from "./slices/orderSlice/orderSlice";
import searchReducer from "./slices/searchSlice/searchSlice";
import pageReducer from "./slices/pageSlice/pageSlice";
import {userToLocalStorageMiddleware} from "./storageMiddleWare";
const store = configureStore({
    reducer: {userReducer, orderReducer,searchReducer,historyReducer,pageReducer,[apiSlice.reducerPath]: apiSlice.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware, userToLocalStorageMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
