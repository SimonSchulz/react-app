import React, {useState} from 'react';
import Logo from "../../../assets/svg/logo";
import Loupe from "../../../assets/svg/loupe";
import {NavLink} from "react-router-dom";
import {searchReducer} from "../../../redux/slices/searchSlice/searchSlice";
import {useDispatch} from "react-redux";
import "./style.scss"
const Header = () => {
    const dispatch = useDispatch();
    const style = ({isActive})=>({'color': isActive? '#FF5D4F' : '#616161'})
    const [search, setSearch] = useState('');
    const handleSearch =(event)=>{
        setSearch(()=>event.target.value);
        dispatch(searchReducer(search))
    }

    return (
        <header className="container">
        <nav>
            <div className='search-block'>
                <NavLink to='/'><Logo/></NavLink>
                <div className="input-block">
                    <input type="text" placeholder='Search by author, title, name' value={search} onChange={(e)=>handleSearch(e)}/>
                    <div className="loupe"><Loupe/></div>
                </div>
            </div>
            <div className='user-block'>
                <NavLink to='/' style={style}>All Books</NavLink>
                <NavLink to='/order' style={style}>My orders</NavLink>
            </div>
            <div className='login-block'>
                <NavLink to='/login' style={style}>Log in</NavLink>
                <NavLink to='/signup' style={style}>Sign up</NavLink>
            </div>
        </nav>
        </header>
    );
};

export default Header;