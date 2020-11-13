import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Dashboard.css'; //Importar Estilos a un Componente
import Navbar from '../components/Navbar';
import ListProduct from '../components/ListProduct';
import Product from '../components/Product';
import { ProductContext } from '../routes/App';
// Containears-> Componentes Mas Grandes
const Dashboar = () => {
  const [productList, setProductList] = useState(
    useContext(ProductContext).productState
  );
  const [search, setSearch] = useState('all');
  const [number, setNumber] = useState({
    all: productList.length,
    articulos: productList.filter(articulos).length,
    libros: productList.filter(libros).length,
    desarrollos: productList.filter((product) => product.type === 'Desarrollo')
      .length,
  });
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
          <h2>Productividad</h2>
          <Link to='/select' className='btn'>
            <i className='fas fa-plus'></i>Agregar producto
          </Link>
        </div>
        <Navbar selector={setSearch} number={number} />
        <ListProduct>
          {filteredProducts.map((producto) => (
            <Product
              key={producto.id}
              product={producto}
              type={producto.type}
            />
          ))}
          {filteredProducts.length === 0 ? (
            <div>NO hay productos para mostrar</div>
          ) : null}
        </ListProduct>
      </div>
    </section>
  );
};

export default Dashboar;
