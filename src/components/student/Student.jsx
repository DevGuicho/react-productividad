import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../assets/styles/components/User.css';

const Student = ({ student }) => {
  const { estudiante, nombre, rfc, curp, email } = student;
  const historia = useHistory();
  const handleClick = () => {
    historia.push('/productos-usuario', { params: student });
  };
  return (
    <article className={`user__article`}>
      <div className={`user__article--img img__${estudiante}`}>
        <i className='fas fa-user'></i>
      </div>
      <div className='user__article--header'>
        <h3 className='user__title' onClick={handleClick}>
          {nombre}
        </h3>
        <div className={`user__tag tag--${estudiante}`}>
          <i className={`fas fa-tag`}></i>
          <span>{estudiante}</span>
        </div>
      </div>
      <div className='user__details'>
        <ul className='user__details--list'>
          <li className='details__principal'>
            <i className={`fas fa-fingerprint tag--${estudiante}`}></i>
            {rfc}
          </li>
          <li className='details__principal'>
            <i className={`fas fa-id-card tag--${estudiante}`}></i>
            {curp}
          </li>
          <li className='details__principal'>
            <i className={`fas fa-envelope tag--${estudiante}`}></i>
            {email}
          </li>
          <li className='details__principal'>
            <i className={`fas fa-graduation-cap tag--${estudiante}`}></i>
            {estudiante}
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Student;
