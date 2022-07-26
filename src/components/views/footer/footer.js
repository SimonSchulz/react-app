import React from 'react';
import "./footer.scss"
import Column from "./column";
import Facebook from "../../../assets/svg/facebook";
import Instagram from "../../../assets/svg/instagram";
const Footer = () => {
    const firstColumn = ['About us', 'Privacy&Security', 'Contact us'];
    const secondColumn = ['Help center', 'FAQs'];
    const thirdColumn = ['Edit profile', 'My orders'];
    return (
        <footer>
            <div className="container footer-wrapper">
                <div className="link-wrapper">
                    <Column title='About Fox Library' data={firstColumn} />
                    <Column title='Help' data={secondColumn} />
                    <Column title='My account' data={thirdColumn} />
                </div>
                <div className="icon-wrapper">
                    <div className="icon-title">Stay connected</div>
                    <div>
                        <a href=""><Instagram/></a>
                        <a href=""><Facebook/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;