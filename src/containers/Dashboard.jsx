import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Dashboard.css'; //Importar Estilos a un Componente
import Navbar from '../components/Navbar';
import ListProduct from '../components/ListProduct';
import Product from '../components/Product';
import { useStore } from '../store/StoreProvider';
import useInitialState from '../hooks/useInitialState';
// Containears-> Componentes Mas Grandes
const Dashboar = () => {
  useInitialState();

  const [filteredProducts, setFilteredProducts] = useState([]);
  const { loading } = useStore();

  return (
    <section className='main'>
      <div className='productTable'>
        <div className='productTable__header'>
          <h2>Productividad</h2>
          <Link to='/select' className='btn'>
            <i className='fas fa-plus'></i>
            <span>Agregar producto</span>
          </Link>
        </div>
        <Navbar setFilteredProducts={setFilteredProducts} />
        <ListProduct>
          {loading ? (
            <div>loading...</div>
          ) : (
            filteredProducts.map((producto) => (
              <Product
                key={producto.id}
                product={producto}
                type={producto.type}
                setFilteredProducts={setFilteredProducts}
                filteredProducts={filteredProducts}
              />
            ))
          )}
        </ListProduct>
      </div>
    </section>
  );
};

export default Dashboar;
