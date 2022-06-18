/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NASA from '../assets/images/naza.png';

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = ({ isActive }) => ({
    borderBottom: isActive ? '2px solid #FFF' : 'none',
  });

  const openMenu = () => {
    if (open === false) {
      setOpen(true);
      console.log(open);
    } else {
      setOpen(false);
      console.log(open);
    }
  };
  return (
    <header className="text-center">
      <nav className="mobile-nav relative">
        <ul className="flex gap-10 items-center ul-items p-5">
          <li>
            <NavLink to="/">
              <img src={NASA} alt="logo" className="w-[100px] logo" />
            </NavLink>
          </li>
          <li><button type="button" onClick={openMenu}><FontAwesomeIcon icon={faBars} className="menu-bar" /></button></li>
        </ul>
      </nav>
      {open ? (
        <nav className="desktop-nav">
          <ul className="flex gap-x-10 items-center relative">
            <li>
              <img src={NASA} alt="Nasa Logo" className="w-[100px] logo" />
            </li>
            <li className="flex gap-x-10 items-center nav-links text-[#fc3d21] font-semibold text-[20px] absolute right-[150px]">
              <div><NavLink to="/" style={handleClick} className="pb-2">Show Media</NavLink></div>
              <div><NavLink to="/search-media" style={handleClick} className="pb-2">Search Media</NavLink></div>
            </li>
          </ul>
        </nav>
      ) : null}

    </header>
  );
};

export default Header;
