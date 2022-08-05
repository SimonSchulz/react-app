import React, {useContext} from 'react';
import Facebook from "../../../assets/svg/facebook";
import Instagram from "../../../assets/svg/instagram";
import {dataContext} from "../../../App";
import Column from "./column";
import "./footer.scss"
const Footer = () => {
    const {first, second, third} = useContext(dataContext);

    return (
        <footer>
            <div className="container footer-wrapper">
                <div className="link-wrapper">
                    <Column title='About Fox Library' data={first} />
                    <Column title='Help' data={second} />
                    <Column title='My account' data={third} />
                </div>
                <div className="icon-wrapper">
                    <div className="icon-title">Stay connected</div>
                    <div>
                        <a href="#"><Instagram/></a>
                        <a href="#"><Facebook/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;