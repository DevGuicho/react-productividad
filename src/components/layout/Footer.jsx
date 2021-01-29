import React from 'react';
import '../../assets/styles/components/Footer.css';
import logoIpn from '../../assets/img/logo_ipn.jpg';
import logoCicata from '../../assets/img/Logo_CICATA.png';
const Footer = () => {
  return (
    <footer className='footer'>
      <img src={logoIpn} alt='logo IPN' />
      <div className='footer__text'>
        <p className='footer__text--title'>
          Instituto Politécnico Nacional <br />
          Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada
          Unidad Legaria
        </p>
        <p className='footer__text--direction'>
          Calzada Legaria 694, Colonia Irrigación, Alcaldía Miguel Hidalgo,
          <br />
          C.P 11500 Ciudad de México, CDMX Conmutador: 55 57 29 60 00.
        </p>
      </div>
      <img src={logoCicata} alt='Logo CICATA' />
    </footer>
  );
};

export default Footer;
