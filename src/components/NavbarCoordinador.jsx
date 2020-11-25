import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Navbar.css';
import { useStore } from '../store/StoreProvider';

const NavbarCoordinador = ({ setFilteredUsers }) => {
  const { usuarios } = useStore();

  useEffect(() => {
    setItems({
      all: usuarios.length,
      maestria: usuarios.filter((producto) =>
        producto.estudiante.match(/(Maestria)$/)
      ).length,
      doctorado: usuarios.filter((producto) =>
        producto.estudiante.match(/(Doctorado)$/)
      ).length,
    });
    handleClick(selection.selection);
  }, [usuarios]);

  const [items, setItems] = useState({
    all: usuarios.length,
    maestria: usuarios.filter((producto) =>
      producto.estudiante.match(/(Maestria)$/)
    ).length,
    doctorado: usuarios.filter((producto) =>
      producto.estudiante.match(/(Doctorado)$/)
    ).length,
  });

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
      setFilteredUsers(usuarios);
    } else if (sel === 'Maestria') {
      setSelection({
        all: false,
        articles: true,
        books: false,
        developments: false,
      });
      setFilteredUsers(
        usuarios.filter((producto) => producto.estudiante.match(/(Maestria)$/))
      );
    } else if (sel === 'Doctorado') {
      setSelection({
        all: false,
        articles: false,
        books: true,
        developments: false,
      });
      setFilteredUsers(
        usuarios.filter((producto) => producto.estudiante.match(/(Doctorado)$/))
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
          onClick={() => handleClick('Maestria')}
        >
          <div className='a'>
            Maestria<span>{items.maestria}</span>
          </div>
        </li>
        <li
          className={`productTable__nav--item ${
            selection.books ? 'selected' : ''
          }`}
          onClick={() => handleClick('Doctorado')}
        >
          <div className='a'>
            Doctorado<span>{items.doctorado}</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarCoordinador;
