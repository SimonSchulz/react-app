import { configureStore } from '@reduxjs/toolkit';
import {apiSlice} from "./slices/api/apiSlice";
import userReducer from './slices/userSlice/userSlice';
import orderReducer from "./slices/orderSlice/orderSlice";
import {setLocalStorage} from "../utils/localeStorage";
const store = configureStore({
    reducer: {user: userReducer, orderReducer,[apiSlice.reducerPath]: apiSlice.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})
store.subscribe(() => {
    setLocalStorage('order', store.getState().orderReducer)
});
export default store;
