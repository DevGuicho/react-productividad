import React, { useState } from 'react';
import '../assets/styles/components/Navbar.css';

const Navbar = ({ setFilteredProducts, products }) => {
  const [selection, setSelection] = useState({
    all: true,
    articles: false,
    books: false,
    developments: false,
    selection: 'all',
  });
  const [items] = useState({
    all: products.length,
    articulos: products.filter((producto) =>
      producto.type.match(/(articuloCongreso)|(articuloRevista)$/)
    ).length,
    libros: products.filter((producto) =>
      producto.type.match(/(capituloLibro)|(Libro)$/)
    ).length,
    desarrollos: products.filter((producto) =>
      producto.type.match(/(Desarrollo)$/)
    ).length,
  });
  const handleClick = (sel) => {
    if (sel === 'all') {
      setSelection({
        all: true,
        articles: false,
        books: false,
        developments: false,
        selection: 'all',
      });
      setFilteredProducts(products);
    } else if (sel === 'articulos') {
      setSelection({
        all: false,
        articles: true,
        books: false,
        developments: false,
        selection: 'articulos',
      });
      setFilteredProducts(
        products.filter((producto) =>
          producto.type.match(/(articuloCongreso)|(articuloRevista)$/)
        )
      );
    } else if (sel === 'libros') {
      setSelection({
        all: false,
        articles: false,
        books: true,
        developments: false,
        selection: 'libros',
      });
      setFilteredProducts(
        products.filter((producto) =>
          producto.type.match(/(capituloLibro)|(Libro)$/)
        )
      );
    } else if (sel === 'desarrollos') {
      setSelection({
        all: false,
        articles: false,
        books: false,
        developments: true,
        selection: 'desarrollos',
      });
      setFilteredProducts(
        products.filter((producto) => producto.type.match(/(Desarrollo)$/))
      );
    }
  };
  return (
    <nav className='productTable__navbar'>
      <ul className='productTable__nav'>
        <li
          className={`productTable__nav--item ${
            selection.all ? 'selected' : ''
          }`}
          onClick={() => handleClick('all')}
        >
          <div className='a'>
            Todo<span>{items.all}</span>
          </div>
        </li>
        <li
          className={`productTable__nav--item ${
            selection.articles ? 'selected' : ''
          }`}
          onClick={() => handleClick('articulos')}
        >
          <div className='a'>
            Articulos<span>{items.articulos}</span>
          </div>
        </li>
        <li
          className={`productTable__nav--item ${
            selection.books ? 'selected' : ''
          }`}
          onClick={() => handleClick('libros')}
        >
          <div className='a'>
            Libros<span>{items.libros}</span>
          </div>
        </li>
        <li
          className={`productTable__nav--item ${
            selection.developments ? 'selected' : ''
          }`}
          onClick={() => handleClick('desarrollos')}
        >
          <div className='a'>
            Desarrollo<span>{items.desarrollos}</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
