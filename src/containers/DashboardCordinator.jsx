import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Dashboard.css';
import ListProduct from '../components/ListProduct';
import User from '../components/Users';
import NavbarCoordinador from '../components/NavbarCoordinador';
import { useStore } from '../store/StoreProvider';

const DashboardCordinator = () => {
  const productList = useStore().usuarios;
  const [search, setSearch] = useState('all');
  const number = {
    all: productList.length,
    maestria: productList.filter((product) => product.estudiante === 'Maestria')
      .length,
    doctorado: productList.filter(
      (product) => product.estudiante === 'Doctorado'
    ).length,
  };

  const filterProducts = () => {
    if (search === 'Maestria') {
      return productList.filter((product) => product.estudiante === 'Maestria');
    } else if (search === 'Doctorado') {
      return productList.filter(
        (product) => product.estudiante === 'Doctorado'
      );
    } else if (search === 'all') {
      return productList;
    } else {
      return [];
    }
  };
  const filteredProducts = filterProducts();
  return (
    <section className='main'>
      <div className='productTable'>
        <div className='productTable__header'>
          <h2>Alumnos</h2>
          <Link to='/coordinador' className='btn'>
            <i className='fas fa-plus'></i>
            <span>Agregar alumno</span>
          </Link>
        </div>
        <NavbarCoordinador selector={setSearch} number={number} />
        <ListProduct>
          {filteredProducts.map((producto) => (
            <User key={producto.id} product={producto} type={producto.type} />
          ))}
          {filteredProducts.length === 0 ? (
            <div>NO hay productos para mostrar</div>
          ) : null}
        </ListProduct>
      </div>
    </section>
  );
};

export default DashboardCordinator;
