import {setLocalStorage} from "../../../utils/localeStorage";

export const userToLocalStorageMiddleware = () => (next) => (action) => {
    if (action.type === "user/setUser") {
        setLocalStorage("user", action.payload)
    }
    if (action.type === "user/removeUser") {
        setLocalStorage("user", {isAuth: '', name: '',  email: '', birthday: '',  token: '', id: ''})
    }
    return next(action)
};