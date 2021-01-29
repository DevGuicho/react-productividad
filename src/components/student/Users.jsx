import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../assets/styles/components/User.css';

const User = ({ product }) => {
  const historia = useHistory();
  const handleClick = () => {
    historia.push('/productos-usuario', { params: product });
  };
  return (
    <article className={`user__article`}>
      <div className={`user__article--img img__${product.estudiante}`}>
        <i className='fas fa-user'></i>
      </div>
      <div className='user__article--header'>
        <h3 className='user__title' onClick={handleClick}>
          {product.nombre}
        </h3>
        <div className={`user__tag tag--${product.estudiante}`}>
          <i className={`fas fa-tag`}></i>
          <span>{product.estudiante}</span>
        </div>
      </div>
      <div className='user__details'>
        <ul className='user__details--list'>
          <li className='details__principal'>
            <i className={`fas fa-fingerprint tag--${product.estudiante}`}></i>
            {product.rfc}
          </li>
          <li className='details__principal'>
            <i className={`fas fa-id-card tag--${product.estudiante}`}></i>
            {product.curp}
          </li>
          <li className='details__principal'>
            <i className={`fas fa-envelope tag--${product.estudiante}`}></i>
            {product.email}
          </li>
          <li className='details__principal'>
            <i
              className={`fas fa-graduation-cap tag--${product.estudiante}`}
            ></i>
            {product.estudiante}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default User;
