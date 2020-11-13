import React from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/styles/components/Product.css';

const User = ({ product }) => {
  const historia = useHistory();
  const handleClick = () => {
    historia.push('/productos-usaurio', { params: product });
  };
  return (
    <article className={`product__article ${product.estudiante}`}>
      <div className='product__article--header'>
        <h3 className='product__title' onClick={handleClick}>
          {product.nombre}
        </h3>
        <div>
          <i className='fas fa-trash-alt click'></i>
        </div>
      </div>
      <div className='product__details'>
        <ul className='product__details--list'>
          <li className='details__principal'>
            <i className='fas fa-calendar-alt'></i>
            {product.rfc}
          </li>

          <li className='details__principal'>
            <i className='fas fa-user-edit'></i>
            {product.curp}
          </li>
          <li className='details__principal'>
            <i className='fas fa-globe'></i>
            {product.email}
          </li>
          <li className='details__principal'>
            <i className='fas fa-globe'></i>
            {product.estudiante}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default User;
