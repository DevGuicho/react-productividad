import React, { useState } from 'react';
import '../assets/styles/components/Navbar.css';

const NavbarCoordinador = ({ selector, number }) => {
  const [selection, setSelection] = useState({
    all: true,
    articles: false,
    books: false,
    developments: false,
  });
  const handleClick = (sel) => {
    if (sel === 'all') {
      setSelection({
        all: true,
        articles: false,
        books: false,
        developments: false,
      });
      selector(sel);
    } else if (sel === 'articulos') {
      setSelection({
        all: false,
        articles: true,
        books: false,
        developments: false,
      });
      selector('Maestria');
    } else if (sel === 'libros') {
      setSelection({
        all: false,
        articles: false,
        books: true,
        developments: false,
      });
      selector('Doctorado');
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
            Todo<span>{number.all}</span>
          </div>
        </li>
        <li
          className={`productTable__nav--item ${
            selection.articles ? 'selected' : ''
          }`}
          onClick={() => handleClick('articulos')}
        >
          <div className='a'>
            Maestria<span>{number.maestria}</span>
          </div>
        </li>
        <li
          className={`productTable__nav--item ${
            selection.books ? 'selected' : ''
          }`}
          onClick={() => handleClick('libros')}
        >
          <div className='a'>
            Doctorado<span>{number.doctorado}</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarCoordinador;
