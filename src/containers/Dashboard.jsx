import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Dashboard.css'; //Importar Estilos a un Componente
import Navbar from '../components/Navbar';
import ListProduct from '../components/ListProduct';
import Product from '../components/Product';
import ProyectoContext from '../context/products/productContext';
// Containears-> Componentes Mas Grandes
const Dashboar = () => {
  const proyectoContext = useContext(ProyectoContext);
  const { loading, filteredProducts, getProducts } = proyectoContext;

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Navbar />
        <ListProduct>
          {loading ? (
            <div>loading...</div>
          ) : (
            filteredProducts.map((producto) => (
              <Product
                key={producto.id}
                product={producto}
                type={producto.type}
              />
            ))
          )}
        </ListProduct>
      </div>
    </section>
  );
};

export default Dashboar;
