import { configureStore } from '@reduxjs/toolkit';
import {apiSlice} from "./slices/api/apiSlice";
import userReducer from './slices/userSlice/userSlice';
import orderReducer from "./slices/orderSlice/orderSlice";
import {setLocalStorage} from "../utils/localeStorage";
import searchReducer from "./slices/searchSlice/searchSlice";
import {userToLocalStorageMiddleware} from "./slices/userSlice/userMiddleWare";
const store = configureStore({
    reducer: { userReducer, orderReducer,searchReducer,[apiSlice.reducerPath]: apiSlice.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware, userToLocalStorageMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})
store.subscribe(() => {
    setLocalStorage('order', store.getState().orderReducer);
});
export default store;
