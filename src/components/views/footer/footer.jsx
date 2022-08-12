import React from 'react';
import { Link } from 'react-router-dom';
import Facebook from '../../../assets/svg/facebook';
import Instagram from '../../../assets/svg/instagram';
import Column from './column';
import './footer.scss';
import columnData from './columnData';

function Footer() {
  const { first, second, third } = columnData;
  return (
    <footer>
      <div className="container footer-wrapper">
        <div className="link-wrapper">
          <Column title="About Fox Library" data={first} />
          <Column title="Help" data={second} />
          <Column title="My account" data={third} />
        </div>
        <div className="icon-wrapper">
          <div className="icon-title">Stay connected</div>
          <div>
            <Link to="/"><Instagram /></Link>
            <Link to="/"><Facebook /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
