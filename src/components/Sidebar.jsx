import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Sidebar.css';
import { useDispatch, useStore } from '../store/StoreProvider';
const Sidebar = () => {
  const { place } = useStore();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (e === 'home') {
      dispatch({
        type: 'SET_PLACE',
        value: {
          home: true,
          users: false,
          products: false,
          config: false,
        },
      });
    } else if (e === 'products') {
      dispatch({
        type: 'SET_PLACE',
        value: {
          home: false,
          users: false,
          products: true,
          config: false,
        },
      });
    } else if (e === 'users') {
      dispatch({
        type: 'SET_PLACE',
        value: {
          home: false,
          users: true,
          products: false,
          config: false,
        },
      });
    } else if (e === 'config') {
      dispatch({
        type: 'SET_PLACE',
        value: {
          home: false,
          users: false,
          products: false,
          config: true,
        },
      });
    }
  };
  return (
    <aside className='aside'>
      <nav className='aside__nav'>
        <ul className='aside__navbar'>
          <li>
            <Link to='/'>
              <i className='fas fa-arrow-left'></i>
            </Link>
          </li>
          <li className={`${place.home ? 'selection' : ''}`}>
            <Link to='/' onClick={() => handleClick('home')}>
              <i className='fas fa-home'></i>
              <span className='link__text'>Home</span>
            </Link>
          </li>
          <li className={`${place.users ? 'selection' : ''}`}>
            <Link to='/coordinador' onClick={() => handleClick('users')}>
              <i className='fas fa-users'></i>
              <span className='link__text'>Alumnos</span>
            </Link>
          </li>
          <li className={`${place.products ? 'selection' : ''}`}>
            <Link to='/' onClick={() => handleClick('products')}>
              <i className='fas fa-list-alt'></i>
              <span className='link__text'>Productos</span>
            </Link>
          </li>
          <li className={`${place.config ? 'selection' : ''}`}>
            <Link to='/' onClick={() => handleClick('config')}>
              <i className='fas fa-cog'></i>
              <span className='link__text--prefer'>Preferencias</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
