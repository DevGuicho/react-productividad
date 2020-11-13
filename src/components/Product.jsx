import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/styles/components/Product.css';
import { ProductContext } from '../routes/App';

const Product = ({ product, type }) => {
  let route = '';
  const productContext = useContext(ProductContext);
  const history = useHistory();
  const deleteProduct = async () => {
    await productContext.productDispatch({
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
      return (
        <li className='details__principal'>
          <i className='fas fa-users'></i>
          {product.congreso}
        </li>
      );
    } else if (type === 'articuloRevista') {
      route = '/art-revista';
      return (
        <li className='details__principal'>
          <i className='fas fa-globe'></i>
          <ul className='product__details--book'>
            <li>{product.revista.nombre}</li>
            <li>{product.revista.tipo}</li>
            <li>{product.revista.indice}</li>
            <li>{product.revista.iss}</li>
            <li>{product.revista.doi}</li>
          </ul>
        </li>
      );
    } else if (type === 'capituloLibro') {
      route = '/capitulo-libro';
      return (
        <li className='details__principal'>
          <i className='fas fa-globe'></i>
          <ul className='product__details--book'>
            <li>{product.libro.titulo}</li>
            <li>{product.libro.editorial}</li>
            <li>{product.libro.edicion}</li>
            <li>{product.libro.isbn}</li>
          </ul>
        </li>
      );
    } else if (type === 'Libro') {
      route = '/libro';
      return (
        <li className='details__principal'>
          <i className='fas fa-globe'></i>
          <ul className='product__details--book'>
            <li>{product.libro.editorial}</li>
            <li>{product.libro.edicion}</li>
            <li>{product.libro.isbn}</li>
          </ul>
        </li>
      );
    } else if (type === 'Desarrollo') {
      route = '/desarrollo';
      return (
        <li className='details__principal'>
          <i className='fas fa-globe'></i>
          <ul className='product__details--book'>
            <li>{product.desarrollo.detalles}</li>
          </ul>
        </li>
      );
    }
  };
  const [firstItem, setFirstItem] = useState(select(product));
  return (
    <article className={`product__article ${type}`}>
      <div className='product__article--header'>
        <h3 className='product__title'>{product.titulo}</h3>
        <div>
          <i className='fas fa-trash-alt click' onClick={deleteProduct}></i>
          <i className='fas fa-pen click' onClick={editProduct}></i>
        </div>
      </div>
      <div className='product__details'>
        <ul className='product__details--list'>
          {firstItem}

          {product.fecha ? (
            <li className='details__principal'>
              <i className='fas fa-calendar-alt'></i>
              {product.fecha}
            </li>
          ) : null}
          <li className='details__principal'>
            <i className='fas fa-user-edit'></i>
            {product.autor}
          </li>
          <li className='details__principal'>
            <i className='fas fa-globe'></i>
            <a href={product.url}>Link del sitio</a>
          </li>
          {product.licencia ? (
            <li className='details__principal'>
              <i className='fas fa-globe'></i>
              {product.licencia}
            </li>
          ) : null}
        </ul>
      </div>
    </article>
  );
};

export default Product;
