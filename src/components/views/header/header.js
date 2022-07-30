import React from 'react';
import "./style.scss"
import Logo from "../../../assets/svg/logo";
import Loupe from "../../../assets/svg/loupe";
import {NavLink} from "react-router-dom";

const Header = () => {
    const style = ({isActive})=>({'color': isActive? '#FF5D4F' : '#616161'})
    return (
        <header className="container">
        <nav>
            <div className='search-block'>
                <NavLink to='/'><Logo/></NavLink>
                <div className="input-block">
                    <input type="text" placeholder='Search by author, title, name'/>
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