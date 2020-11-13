import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/styles/Dashboard.css';
import Navbar from '../components/Navbar';
import ListProduct from '../components/ListProduct';
import Product from '../components/Product';

const DashboardUserCord = () => {
  const location = useLocation();
  const productList = location.state.params.productos;
  const usuario = location.state.params;
  const [search, setSearch] = useState('all');
  const number = {
    all: productList.length,
    articulos: productList.filter(articulos).length,
    libros: productList.filter(libros).length,
    desarrollos: productList.filter((product) => product.type === 'Desarrollo')
      .length,
  };
  function articulos(elemento) {
    if (
      elemento.type === 'articuloCongreso' ||
      elemento.type === 'articuloRevista'
    ) {
      return true;
    } else {
      return false;
    }
  }
  function libros(elemento) {
    if (elemento.type === 'capituloLibro' || elemento.type === 'Libro') {
      return true;
    } else {
      return false;
    }
  }

  const filterProducts = () => {
    if (search === 'articulos') {
      return productList.filter(articulos);
    } else if (search === 'libros') {
      return productList.filter(libros);
    } else if (search === 'desarrollos') {
      return productList.filter((product) => product.type === 'Desarrollo');
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
          <h2>Productividadf</h2>
          <p>{usuario.nombre}</p>
        </div>
        <Navbar selector={setSearch} number={number} />
        <ListProduct>
          {filteredProducts.map((producto) => (
            <Product
              key={producto.id}
              product={producto}
              type={producto.type}
              isCordinator
            />
          ))}
          {filteredProducts.length === 0 ? (
            <div>NO hay productos para mostrar</div>
          ) : null}
        </ListProduct>
      </div>
      <article className='userCard'>
        <div className='userCard__avatar'>
          <i className='fas fa-user userCard__avatar--icon'></i>
        </div>
        <div className='userCard__datos'>
          <ol>
            <li>
              <i className='fas fa-user'></i>
              <span>{usuario.rfc}</span>
            </li>
            <li>
              <i className='fas fa-user'></i>
              <span>{usuario.curp}</span>
            </li>
            <li>
              <i className='fas fa-user'></i>
              <span>{usuario.email}</span>
            </li>
            <li>
              <i className='fas fa-user'></i>
              <span>{usuario.estudiante}</span>
            </li>
          </ol>
        </div>
      </article>
    </section>
  );
};

export default DashboardUserCord;
