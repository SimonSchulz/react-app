import { configureStore } from '@reduxjs/toolkit';
import {apiSlice} from "./slices/api/apiSlice";
import userReducer from './slices/userSlice/userSlice';
import orderReducer from "./slices/orderSlice/orderSlice";
import {setLocalStorage} from "../utils/localeStorage";
import searchReducer from "./slices/searchSlice/searchSlice";
const store = configureStore({
    reducer: { userReducer, orderReducer,searchReducer,[apiSlice.reducerPath]: apiSlice.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})
const unsubscribe = store.subscribe(() => {
    setLocalStorage('order', store.getState().orderReducer)
});
unsubscribe();
export default store;
