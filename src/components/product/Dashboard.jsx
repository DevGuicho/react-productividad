import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ListProduct from './ListProduct';
import Product from './Product';
import ProyectoContext from '../../context/products/productContext';
import '../../assets/styles/Dashboard.css'; //Importar Estilos a un Componente

// Containears-> Componentes Mas Grandes
const Dashboard = () => {
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

export default Dashboard;