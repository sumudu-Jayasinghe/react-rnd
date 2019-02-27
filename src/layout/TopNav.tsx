import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Topnav = () => {
  return (
    <ul className='nav nav-pills'>
      <li className='nav-item'>
        <NavLink activeClassName='active' to='/' className='nav-link' exact>
          Home
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink activeClassName='active' to='/rnd' className='nav-link'>
          RnD
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink activeClassName='active' to='/games' className='nav-link'>
          Games
        </NavLink>
      </li>
    </ul>
  );
};
