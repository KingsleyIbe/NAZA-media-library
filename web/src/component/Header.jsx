import React from 'react';
import { NavLink } from 'react-router-dom';
import NASA from '../assets/images/naza.png';

const Header = () => {
  const handleClick = ({ isActive }) => ({
    borderBottom: isActive ? '2px solid #FFF' : 'none',
  });
  return (
    <header className="text-center p-10">
      <nav>
        <ul className="flex gap-x-10 items-center relative">
          <div>
            <img src={NASA} alt="Nasa Logo" className="w-[100px]" />
          </div>
          <div className="flex gap-x-10 items-center text-[#fc3d21] font-semibold text-[20px] absolute right-[150px]">
            <li><NavLink to="/" style={handleClick} className="pb-2">Show Media</NavLink></li>
            <li><NavLink to="/search-media" style={handleClick} className="pb-2">Search Media</NavLink></li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
