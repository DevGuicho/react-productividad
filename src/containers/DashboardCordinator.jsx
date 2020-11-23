import React, { useState } from 'react';
import '../assets/styles/Dashboard.css';
import '../assets/styles/UserCord.css';
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
        </div>
        <NavbarCoordinador selector={setSearch} number={number} />
        <ListProduct>
          {filteredProducts.map((producto) => (
            <User key={producto.id} product={producto} type={producto.type} />
          ))}
          {filteredProducts.length === 0 ? (
            <div className='emptyProduct'>
            <i className='fas fa-times-circle'></i>
            No hay Alumnos Registrados
          </div>
          ) : null}
        </ListProduct>
      </div>
    </section>
  );
};

export default DashboardCordinator;
