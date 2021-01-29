import React, { useContext, useEffect, useState } from 'react';
import '../assets/styles/components/Navbar.css';
import ProductContext from '../context/products/productContext';

const Navbar = () => {
  const productContext = useContext(ProductContext);
  const { productos, filterProducts } = productContext;

  const countProducts = () => ({
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

  useEffect(() => {
    setItems(countProducts());
    filterProducts(selection);
    handleClick(selection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productos]);
  const [items, setItems] = useState(countProducts());
  const [selection, setSelection] = useState('all');
  const handleClick = (sel) => {
    setSelection(sel);
    filterProducts(sel);
  };
  return (
    <nav className='productTable__navbar'>
      <ul className='productTable__nav'>
        <li
          className={`productTable__nav--item ${
            selection === 'all' ? 'selected' : ''
          }`}
          onClick={() => handleClick('all')}
        >
          <div className='a'>
            Todo<span>{items.all}</span>
          </div>
        </li>
        <li
          className={`productTable__nav--item ${
            selection === 'articulos' ? 'selected' : ''
          }`}
          onClick={() => handleClick('articulos')}
        >
          <div className='a'>
            Articulos<span>{items.articulos}</span>
          </div>
        </li>
        <li
          className={`productTable__nav--item ${
            selection === 'libros' ? 'selected' : ''
          }`}
          onClick={() => handleClick('libros')}
        >
          <div className='a'>
            Libros<span>{items.libros}</span>
          </div>
        </li>
        <li
          className={`productTable__nav--item ${
            selection === 'desarrollos' ? 'selected' : ''
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
