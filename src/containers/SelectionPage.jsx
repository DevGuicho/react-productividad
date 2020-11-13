import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/SelectionPage.css';
import ArticuloCongreso from '../assets/img/articuloCongreso.png';
import ArticuloRevista from '../assets/img/articuloRevista.png';
import CapituloLibro from '../assets/img/capituloLibro.png';
import Desarrollo from '../assets/img/desarrollo.png';
import Libro from '../assets/img/libro.png';

const SelectionPage = () => {
  return (
    <section className='selectPage'>
      <div className='selectPage__container'>
        <div className='selectPage__header'>
          <h2 className='selectPage__title'>Seleccione un producto</h2>
        </div>
        <div className='selectPage__Grid'>
          <article className='btnProduct'>
            <Link to='/art-congreso' className='btnProduct__link'>
              <img
                src={ArticuloCongreso}
                alt=''
                className='btnProduct__Link--img'
              />
              <p className='btnProduct__Link--text'>Articulo de congreso</p>
            </Link>
          </article>
          <article className='btnProduct'>
            <Link to='/art-revista' className='btnProduct__link'>
              <img
                src={ArticuloRevista}
                alt=''
                className='btnProduct__Link--img'
              />
              <p className='btnProduct__Link--text'>Articulo de Revista</p>
            </Link>
          </article>
          <article className='btnProduct'>
            <Link to='/capitulo-libro' className='btnProduct__link'>
              <img
                src={CapituloLibro}
                alt=''
                className='btnProduct__Link--img'
              />
              <p className='btnProduct__Link--text'>Capitulo de Libro</p>
            </Link>
          </article>
          <article className='btnProduct'>
            <Link to='/libro' className='btnProduct__link'>
              <img src={Libro} alt='' className='btnProduct__Link--img' />
              <p className='btnProduct__Link--text'>Libro</p>
            </Link>
          </article>
          <article className='btnProduct'>
            <Link to='/desarrollo' className='btnProduct__link'>
              <img src={Desarrollo} alt='' className='btnProduct__Link--img' />
              <p className='btnProduct__Link--text'>Desarrollo</p>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};
export default SelectionPage;
