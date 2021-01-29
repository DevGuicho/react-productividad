import React, { useState, useEffect, useContext } from 'react';
import StudentContext from '../context/students/studentContext';
import '../assets/styles/components/Navbar.css';

const NavbarCoordinador = () => {
  const studentContext = useContext(StudentContext);
  const { filterStudents, students } = studentContext;
  const countStudents = () => ({
    all: students.length,
    maestria: students.filter((producto) =>
      producto.estudiante.match(/(Maestria)$/)
    ).length,
    doctorado: students.filter((producto) =>
      producto.estudiante.match(/(Doctorado)$/)
    ).length,
  });
  useEffect(() => {
    setItems(countStudents);
    handleClick(selection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [students]);

  const [items, setItems] = useState(countStudents());

  const [selection, setSelection] = useState('all');
  const handleClick = (sel) => {
    setSelection(sel);
    filterStudents(sel);
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
            selection === 'Maestria' ? 'selected' : ''
          }`}
          onClick={() => handleClick('Maestria')}
        >
          <div className='a'>
            Maestria<span>{items.maestria}</span>
          </div>
        </li>
        <li
          className={`productTable__nav--item ${
            selection === 'Doctorado' ? 'selected' : ''
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
