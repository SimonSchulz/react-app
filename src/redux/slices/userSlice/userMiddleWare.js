import {setLocalStorage} from "../../../utils/localeStorage";
import store from "../../store";

export const userToLocalStorageMiddleware = () => (next) => (action) => {
    store.subscribe(() => {
        setLocalStorage('order', store.getState().orderReducer);
    });
    if (action.type === "user/setUser") {
        setLocalStorage("user", action.payload)
    }
    if (action.type === "user/removeUser") {
        setLocalStorage("user", {isAuth: '', name: '',  email: '', birthday: '',  token: '', id: ''})
    }
    return next(action)
};