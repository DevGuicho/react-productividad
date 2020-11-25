import React, { useEffect, useState } from 'react';
import '../assets/styles/components/Navbar.css';
import { useStore } from '../store/StoreProvider';

const Navbar = ({ setFilteredProducts }) => {
  const { productos } = useStore();
  useEffect(() => {
    setItems({
      all: productos.length,
      articulos: productos.filter((producto) =>
        producto.type.match(/(articuloCongreso)|(articuloRevista)$/)
      ).length,
      libros: productos.filter((producto) =>
        producto.type.match(/(capituloLibro)|(Libro)$/)
      ).length,
      desarrollos: productos.filter((producto) =>
        producto.type.match(/(Desarrollo)$/)
      ).length,
    });
    handleClick(selection.selection);
  }, [productos]);
  const [items, setItems] = useState({
    all: productos.length,
    articulos: productos.filter((producto) =>
      producto.type.match(/(articuloCongreso)|(articuloRevista)$/)
    ).length,
    libros: productos.filter((producto) =>
      producto.type.match(/(capituloLibro)|(Libro)$/)
    ).length,
    desarrollos: productos.filter((producto) =>
      producto.type.match(/(Desarrollo)$/)
    ).length,
  });
  const [selection, setSelection] = useState({
    all: true,
    articles: false,
    books: false,
    developments: false,
    selection: 'all',
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
      setFilteredProducts(productos);
    } else if (sel === 'articulos') {
      setSelection({
        all: false,
        articles: true,
        books: false,
        developments: false,
        selection: 'articulos',
      });
      setFilteredProducts(
        productos.filter((producto) =>
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
        productos.filter((producto) =>
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
        productos.filter((producto) => producto.type.match(/(Desarrollo)$/))
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
