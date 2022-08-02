export const getLocalStorage = key => {
    const data = localStorage.getItem(key);
    if (data !== null) {
        return JSON.parse(data);
    }
    return key==="user" ? {isAuth: null, name: null, email: null, birthday: null, token: null, id: null,} : [];
}

export const setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}