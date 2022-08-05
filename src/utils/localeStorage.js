export const getLocalStorage = key => {
    const data = localStorage.getItem(key);
    if (data !== null) {
        return JSON.parse(data);
    }
    if(key==="order"){return [];};
    if(key==="history"){return {ids:[],search:[]};};
    return { isAuth: '', name: '',  email: '', birthday: '',  token: '', id: ''}
}

export const setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}