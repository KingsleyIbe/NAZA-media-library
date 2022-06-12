import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Search Media</Link>
        </li>
        <li><Link to="/show-media">Show Media</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
