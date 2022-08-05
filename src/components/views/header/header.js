import React, {useCallback, useState} from 'react';
import Logo from "../../../assets/svg/logo";
import Loupe from "../../../assets/svg/loupe";
import {NavLink, useNavigate} from "react-router-dom";
import {setStringSearch} from "../../../redux/slices/searchSlice/searchSlice";
import {useDispatch} from "react-redux";
import debounce from 'lodash/debounce';
import {useAuth} from "../../../hooks/useAuth";
import avatar from "../../../assets/svg/avatar.svg"
import "./style.scss"

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const style = ({isActive})=>({'color': isActive? '#FF5D4F' : '#616161'})
    const [search, setSearch] = useState('');
    const debouncedDispatch = useCallback(debounce(value=>{
        dispatch(setStringSearch(value))
        navigate(`/search/${value}`);
        setSearch('');
    },2500),[]);
    const handleSearch = (event) =>{
        setSearch(event.target.value);
        debouncedDispatch(event.target.value);
    }
    const isLogin = useAuth().isAuth;
    return (
        <header className="container">
        <nav>
            <div className='search-block'>
                <NavLink to='/'><Logo/></NavLink>
                { isLogin?
                <div className="input-block">
                    <input type="text" placeholder='Search by author, title, name' value={search} onInput={handleSearch} />
                    <div className="loupe"><Loupe/></div>
                </div>:null}
            </div>
            { isLogin?
                <div className='user-block'>
                    <NavLink to='/' style={style}>All Books</NavLink>
                    <NavLink to='/order' style={style}>My orders</NavLink>
                    <NavLink to='/history' style={style}>History</NavLink>
                    <NavLink to='/user' style={style}><img style={{width:"46px"}} src={avatar} alt="avatar"/></NavLink>
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