import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ProductContext from '../../context/products/productContext';
import useProduct from '../../hooks/useProduct';
import '../../assets/styles/components/Product.css';

const Product = ({ product, type, isCordinator }) => {
  const history = useHistory();
  const productContext = useContext(ProductContext);
  const { deleteProduct } = productContext;

  const editProduct = () => {
    history.push(route, { params: product });
  };

  const [firstItem, tag, route, img] = useProduct(product, type);
  return (
    <article className={`product__article`}>
      <div className={`product__img--${type}`}>{img}</div>
      <div className='article__header'>
        <h3 className='article__header--title'>{product.titulo}</h3>
        <div className={`header__tag ${type}`}>
          <i className='fas fa-tag i'></i>
          <span>{tag}</span>
        </div>
        {isCordinator ? (
          <div></div>
        ) : (
          <div className='article__header--panel'>
            <i
              className='fas fa-trash-alt click'
              onClick={() => deleteProduct(product.id)}
            ></i>
            <i className='fas fa-pen click' onClick={editProduct}></i>
          </div>
        )}
      </div>
      <div className={`product__details details__${type}`}>
        {firstItem}
        {product.desarrollo ? (
          <ul className='product__details--general'>
            <li>{product.autor}</li>
            <li>{product.tesis}</li>
            <li>
              <a href={product.url}>Link del Repositorio</a>
            </li>
            <li>{product.desarrollo.licencia}</li>
            <li>{product.desarrollo.fecha}</li>
          </ul>
        ) : (
          <ul className='product__details--general'>
            <li>{product.autor}</li>
            <li>{product.tesis}</li>
            <li>
              <a href={product.url}>Link del Repositorio</a>
            </li>
          </ul>
        )}
      </div>
    </article>
  );
};

export default Product;
