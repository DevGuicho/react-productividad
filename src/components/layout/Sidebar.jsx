import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../assets/styles/components/Sidebar.css';

const Sidebar = (props) => {
  const history = useHistory();
  const [url, setUrl] = useState(history.location.pathname);
  useEffect(() => {
    setUrl(history.location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* const location = useLocation(); */

  const handleClick = (e) => {
    if (e === 'back') {
      history.goBack();

      /* console.log(location.pathname); */
    } else {
      setUrl(e);
    }
  };
  return (
    <aside className='aside'>
      <nav className='aside__nav'>
        <ul className='aside__navbar'>
          <li>
            <div className='goBack' onClick={() => handleClick('back')}>
              <i className='fas fa-arrow-left'></i>
            </div>
          </li>
          <li className={`${url === '/' ? 'selection' : ''}`}>
            <Link to='/' onClick={() => handleClick('/')}>
              <i className='fas fa-home'></i>
              <span className='link__text'>Home</span>
            </Link>
          </li>
          <li className={`${url === '/students' ? 'selection' : ''}`}>
            <Link to='/students' onClick={() => handleClick('/students')}>
              <i className='fas fa-users'></i>
              <span className='link__text'>Alumnos</span>
            </Link>
          </li>
          <li className={`${url === '/products' ? 'selection' : ''}`}>
            <Link to='/products' onClick={() => handleClick('/products')}>
              <i className='fas fa-list-alt'></i>
              <span className='link__text'>Productos</span>
            </Link>
          </li>
          <li className={`${url === '/configuration' ? 'selection' : ''}`}>
            <Link
              to='/configuration'
              onClick={() => handleClick('/configuration')}
            >
              <i className='fas fa-cog'></i>
              <span className='link__text--prefer'>Preferencias</span>
            </Link>
          </li>
        </ul>
      </nav>
      <Link to='/login' className='logout'>
        <i className='fas fa-power-off'></i>
        <span>Cerrar Sesión</span>
      </Link>
    </aside>
  );
};

export default Sidebar;
