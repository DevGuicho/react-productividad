import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Sidebar.css';
const Sidebar = () => {
  return (
    <aside className='aside'>
      <nav className='aside__nav'>
        <ul className='aside__navbar'>
          <li>
            <Link to='/'>
              <i className='fas fa-arrow-left'></i>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <i className='fas fa-home'></i>
            </Link>
          </li>
          <li>
            <Link to='/coordinador'>
              <i className='fas fa-users'></i>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <i className='fas fa-list-alt'></i>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <i className='fas fa-cog'></i>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
