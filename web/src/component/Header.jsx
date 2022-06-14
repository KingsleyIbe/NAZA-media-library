import React from 'react';
import { Link } from 'react-router-dom';
import NASA from '../assets/images/naza.png';

const Header = () => {
  const handleClick = ({ isActive }) => ({
    borderBottom: isActive ? '4px solid #4853F1' : 'none',
  });
  return (
    <header className="text-center p-10">
      <nav>
        <ul className="flex gap-x-10 items-center relative">
          <div>
            <img src={NASA} alt="Nasa Logo" className="w-[50px]" />
          </div>
          <div className="flex gap-x-10 items-center text-[#fc3d21] font-semibold text-[20px] absolute right-[200px]">
            <li><Link to="/" onClick={{ handleClick }}>Show Media</Link></li>
            <li><Link to="/search-media">Search Media</Link></li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
