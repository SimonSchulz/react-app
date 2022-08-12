import { getLocalStorage, setLocalStorage } from '../utils/localeStorage';

const userToLocalStorageMiddleware = () => (next) => (action) => {
  if (action.type === 'user/signUp') {
    setLocalStorage('user', action.payload);
  }
  if (action.type === 'user/logIn') {
    const data = getLocalStorage('user');
    setLocalStorage('user', { ...data, ...action.payload });
  }
  if (action.type === 'user/setUser') {
    setLocalStorage('user', action.payload);
  }
  if (action.type === 'user/logOut') {
    const data = getLocalStorage('user');
    setLocalStorage('user', { ...data, email: '' });
  }
  if (action.type === 'history/addId') {
    const data = getLocalStorage('history');
    setLocalStorage('history', { ...data, ids: [action.payload, ...data.ids] });
  }
  if (action.type === 'history/addStringSearch') {
    const data = getLocalStorage('history');
    setLocalStorage('history', { ...data, search: [action.payload, ...data.search] });
  }
  if (action.type === 'history/clearHistory') {
    setLocalStorage('history', { ids: [], search: [] });
  }
  return next(action);
};
export default userToLocalStorageMiddleware;
