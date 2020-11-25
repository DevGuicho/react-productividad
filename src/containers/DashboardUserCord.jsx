import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/styles/Dashboard.css';
import '../assets/styles/UserCord.css';
import NavbarProductsCoordinator from '../components/NavbarProductsCoordinator';
import ListProduct from '../components/ListProduct';
import Product from '../components/Product';

const DashboardUserCord = () => {
  const location = useLocation();
  const productList = location.state.params.productos;
  const usuario = location.state.params;
  const [filteredProducts, setFilteredProducts] = useState(productList);

  return (
    <section className='main'>
      <div className='productTable'>
        <div className='productTable__headerUC'>
          <div className='headertext'>
            <h2>Productividad</h2>
          </div>
          <div className='headertext'>
            <p>{usuario.nombre}</p>
          </div>
        </div>
        <NavbarProductsCoordinator
          setFilteredProducts={setFilteredProducts}
          products={productList}
        />
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
            <div className='emptyProduct'>
              <i className='fas fa-times-circle'></i>
              No hay Productos para Mostrar
            </div>
          ) : null}
        </ListProduct>
      </div>
      <article className='userCard'>
        <div className='userCard__outline'>
          <div className='userCard__avatar'>
            <i className='fas fa-user userCard__avatar--icon'></i>
          </div>
          <div className='userCard__datos'>
            <ol className='dataUser'>
              <li className='userName'>
                <span>{usuario.nombre}</span>
              </li>
              <li>
                <i className='fas fa-fingerprint'></i>
                <span>{usuario.rfc}</span>
              </li>
              <li>
                <i className='fas fa-id-card'></i>
                <span>{usuario.curp}</span>
              </li>
              <li>
                <i className='fas fa-envelope'></i>
                <span>{usuario.email}</span>
              </li>
              <li>
                <i className='fas fa-graduation-cap'></i>
                <span>{usuario.estudiante}</span>
              </li>
            </ol>
          </div>
        </div>
      </article>
    </section>
  );
};

export default DashboardUserCord;
