import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import ListProduct from './ListProduct';
import Product from './Product';
import ProyectoContext from '../../context/products/productContext';
import '../../assets/styles/Dashboard.css'; //Importar Estilos a un Componente

// Containears-> Componentes Mas Grandes
const ProductsPanel = () => {
  const proyectoContext = useContext(ProyectoContext);
  const {
    loading,
    filteredProducts,
    getProducts,
    getStudentProducts,
  } = proyectoContext;
  const location = useLocation();
  const student = location.state ? location.state.params : null;
  /* const usuario = location.state.params; */

  useEffect(() => {
    if (!student) getProducts();
    else getStudentProducts(student.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

  return (
    <section className='main'>
      <div className='productTable'>
        <div className='productTable__header'>
          <h2>Productividad</h2>
          {!student && (
            <Link to='/select' className='btn'>
              <i className='fas fa-plus'></i>
              <span>Agregar producto</span>
            </Link>
          )}
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
                isCordinator={student}
              />
            ))
          )}
        </ListProduct>
      </div>
    </section>
  );
};

export default ProductsPanel;
