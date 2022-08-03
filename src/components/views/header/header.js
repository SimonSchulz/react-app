import React, {useState} from 'react';
import Logo from "../../../assets/svg/logo";
import Loupe from "../../../assets/svg/loupe";
import {NavLink} from "react-router-dom";
import {searchReducer} from "../../../redux/slices/searchSlice/searchSlice";
import {useDispatch} from "react-redux";
import throttle from 'lodash/throttle';
import {useAuth} from "../../../hooks/useAuth";
import "./style.scss"

const Header = () => {
    const dispatch = useDispatch();
    const style = ({isActive})=>({'color': isActive? '#FF5D4F' : '#616161'})
    const [search, setSearch] = useState('');
    const handleSearch = (event) =>{
        setSearch(event.target.value);
        dispatch(searchReducer(event.target.value));
    }
    const handleSearchThrottled = throttle(handleSearch,2000);
    const isLogin = useAuth().isAuth;
    return (
        <header className="container">
        <nav>
            <div className='search-block'>
                <NavLink to='/'><Logo/></NavLink>
                { isLogin?
                <div className="input-block">
                    <input type="text" placeholder='Search by author, title, name' value={search} onInput={handleSearchThrottled} />
                    <div className="loupe"><Loupe/></div>
                </div>:null}
            </div>
            { isLogin?
                <div className='user-block'>
                    <NavLink to='/' style={style}>All Books</NavLink>
                    <NavLink to='/order' style={style}>My orders</NavLink>
                    <NavLink to='/user' style={{...style, marginLeft:40}}>My page</NavLink>
                </div>:
                <div className='login-block'>
                    <NavLink to='/login' style={style}>Log in</NavLink>
                    <NavLink to='/signup' style={style}>Sign up</NavLink>
                </div>
            }
        </nav>
        </header>
    );
};

export default Header;