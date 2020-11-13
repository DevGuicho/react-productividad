import React from 'react';
import logoIpn from '../assets/img/logo_ipn.jpg'; //Agregar Imagenes
import '../assets/styles/components/Header.css'; //Importar Hojas de Estilos
const Header = () => {
  return (
    /*class -> className */
    <header className='header'> 
      <div className='header__title'>
        <img src={logoIpn} alt='logo IPN' />
        <div className='header__text'>
          <h3>Instituto Politécnico Nacional</h3>
          <span>"La técnica al servicio de la patria"</span>
        </div>
      </div>
      <div className='header__panel'>
        <i className='fas fa-bell header__panel--bell'></i>
        <div className='panel__user'>
          <span className='panel__user--avatar'>
            <i className='fas fa-user'></i>
          </span>
          <span className='panel__user--name'>
            John Doe<i className='fas fa-angle-down'></i>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
