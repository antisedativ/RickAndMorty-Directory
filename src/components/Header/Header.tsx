import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import cl from './Header.module.scss'

const Header:React.FC = () => {
  const setActive = ({isActive}:any) => (isActive ? [cl.navigation__item, cl.active].join(" ") : cl.navigation__item);

  return (
    <div className={cl.wrapper}>
      <div className={cl.container}>
        <Link to='/' className={cl.logo}>
          <img src="https://upload.wikimedia.org/wikipedia/ru/c/c8/Rick_and_Morty_logo.png" alt="" />
        </Link>
        <ul className={cl.navigation}>
          <NavLink to='/' className={setActive}>Characters</NavLink>
          <NavLink to='/news' className={setActive}>News</NavLink>
          <NavLink to='/about' className={setActive}>About</NavLink>
        </ul>
        </div>
    </div>
  );
};

export default Header;