import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/styles/components/Product.css';
import { useDispatch } from '../store/StoreProvider';
import imgArtCongres from '../assets/img/articuloCongreso.png';
import imgArtMagazine from '../assets/img/articuloRevista.png';
import imgChapBook from '../assets/img/capituloLibro.png';
import imgBook from '../assets/img/libro.png';
import imgDevelop from '../assets/img/desarrollo.png';
const Product = ({ product, type, isCordinator }) => {
  let route = '';
  let tag = '';
  let img = '';
  const dispatch = useDispatch();
  const history = useHistory();
  const deleteProduct = async () => {
    await dispatch({
      type: 'DELETE_PRODUCT',
      value: product.id,
    });
  };
  const editProduct = () => {
    history.push(route, { params: product });
  };
  const select = (product) => {
    if (type === 'articuloCongreso') {
      route = '/art-congreso';
      tag = 'Articulo de congreso';
      img = (
        <img src={imgArtCongres} alt='' className='product__article--img0' />
      );
      return (
        <ul className='product__details--list'>
          <li>{product.congreso}</li>
          <li>{product.fecha}</li>
        </ul>
      );
    } else if (type === 'articuloRevista') {
      route = '/art-revista';
      tag = 'Articulo en Revista';
      img = (
        <img src={imgArtMagazine} alt='' className='product__article--img' />
      );
      return (
        <ul className='product__details--list'>
          <li>{product.revista.nombre}</li>
          <li>{product.revista.tipo}</li>
          <li>{product.revista.indice}</li>
          <li>{product.revista.iss}</li>
          <li>{product.revista.doi}</li>
        </ul>
      );
    } else if (type === 'capituloLibro') {
      route = '/capitulo-libro';
      tag = 'Capitulo de Libro';
      img = <img src={imgChapBook} alt='' className='product__article--img' />;
      return (
        <ul className='product__details--list'>
          <li>{product.libro.titulo}</li>
          <li>{product.libro.editorial}</li>
          <li>{product.libro.edicion}</li>
          <li>{product.fecha}</li>
          <li>{product.libro.isbn}</li>
        </ul>
      );
    } else if (type === 'Libro') {
      route = '/libro';
      tag = 'Libro';
      img = <img src={imgBook} alt='' className='product__article--img' />;
      return (
        <ul className='product__details--list'>
          <li>{product.libro.editorial}</li>
          <li>{product.libro.edicion}</li>
          <li>{product.fecha}</li>
          <li>{product.libro.isbn}</li>
        </ul>
      );
    } else if (type === 'Desarrollo') {
      route = '/desarrollo';
      tag = 'Desarrollo';
      img = <img src={imgDevelop} alt='' className='product__article--img' />;
      return (
        <div className='product__details--develop'>
          <p>{product.desarrollo.detalles}</p>
        </div>
      );
    }
  };
  const [firstItem, setFirstItem] = useState(select(product));
  return (
    <article className={`product__article`}>
      <div className={`product__img--${type}`}>{img}</div>
      <div className='product__article--header'>
        <div className={`header__tag ${type}`}>
          <h3 className='product__title'>{product.titulo}</h3>
          <i className='fas fa-tag i'></i>
          <span>{tag}</span>
        </div>
        {isCordinator ? (
          <div></div>
        ) : (
          <div className='panelProduct'>
            <i className='fas fa-trash-alt click' onClick={deleteProduct}></i>
            <i className='fas fa-pen click' onClick={editProduct}></i>
          </div>
        )}
      </div>
      <div className='product__details'>
        {firstItem}
        <ul className='product__details--general'>
          <li>{product.autor}</li>
          {product.licencia ? <li>{product.fecha}</li> : null}
          <li>{product.tesis}</li>
          {product.licencia ? <li>{product.licencia}</li> : null}
          <li>
            <a href={product.url}>Link del Repositorio</a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Product;
