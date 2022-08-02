import {useSelector} from 'react-redux';

export function useAuth() {
    const {name, email, birthday, token, id} = useSelector(state => state.userReducer);
    return {
        isAuth: !!email,
        name,
        email,
        birthday,
        token,
        id,
    };
}