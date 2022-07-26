import React from 'react';
import "./style.scss"
import Logo from "../../../assets/svg/logo";
import Loupe from "../../../assets/svg/loupe";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="container">
        <nav>
            <div className='search-block'>
                <Link to='/'><Logo/></Link>
                <div className="input-block">
                    <input type="text" placeholder='Search by author, title, name'/>
                    <div className="loupe"><Loupe/></div>
                </div>
            </div>
            <div className='user-block'>
                <a href="#">Log in</a>
                <a href="#">Log up</a>
            </div>
        </nav>
        </div>
    );
};

export default Header;