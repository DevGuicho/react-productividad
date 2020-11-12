import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Dashboard.css';
import Navbar from '../components/Navbar';
import ListProduct from '../components/ListProduct';
import Product from '../components/Product';
const Dashboar = () => {
  const [productList, setProductList] = useState([
    {
      'id': 1,
      'titulo': 'Paralisis del sueño',
      'congreso': 'Congreso de Viena',
      'fecha': '07/07/1998',
      'autor': 'principal',
      'url': 'https://google.com',
      'type': 'articuloCongreso',
    },
    {
      'id': 2,
      'titulo': 'Paralisis del sueño',
      'fecha': '07/07/1998',
      'autor': 'principal',
      'url': 'https://google.com',
      'type': 'articuloRevista',
      'revista': {
        'nombre': 'Science America',
        'tipo': 'Tipo de revista',
        'indice': 'indice',
        'isnn': 'isnn',
        'doi': 'DOI del articulo',
      },
    },
    {
      'id': 3,
      'titulo': 'Paralisis del sueño',
      'congreso': 'Congreso de Viena',
      'fecha': '07/07/1998',
      'autor': 'principal',
      'url': 'https://google.com',
      'type': 'capituloLibro',
      'libro': {
        'titulo': 'Titulo del libro',
        'editorial': 'Limusa',
        'edicion': '2da Edición',
        'isbn': 'ISBN fda',
      },
    },
    {
      'id': 4,
      'titulo': 'Paralisis del sueño',
      'congreso': 'Congreso de Viena',
      'fecha': '07/07/1998',
      'autor': 'principal',
      'url': 'https://google.com',
      'type': 'Libro',
      'libro': {
        'editorial': 'Limusa',
        'edicion': '2da Edición',
        'isbn': 'ISBN fda',
      },
    },
    {
      'id': 5,
      'titulo': 'Paralisis del sueño',
      'congreso': 'Congreso de Viena',
      'fecha': '07/07/1998',
      'autor': 'principal',
      'url': 'https://google.com',
      'type': 'Desarrollo',
      'licencia': 'MIT',
      'desarrollo': {
        'detalles': 'Detalles del producto',
      },
    },
  ]);
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
