import React, { useContext, useEffect } from 'react';
import '../assets/styles/Dashboard.css';
import '../assets/styles/UserCord.css';
import ListProduct from '../components/ListProduct';
import User from '../components/Users';
import NavbarCoordinador from '../components/NavbarCoordinador';
import StudentContext from '../context/students/studentContext';

const DashboardCordinator = () => {
  const studentContext = useContext(StudentContext);
  const { getStudents, filteredStudents } = studentContext;

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /* const [filteredUsers, setFilteredUsers] = useState(useStore().usuarios); */

  return (
    <section className='main'>
      <div className='productTable'>
        <div className='productTable__header'>
          <h2>Alumnos</h2>
        </div>

        <NavbarCoordinador />
        <ListProduct>
          {filteredStudents.map((producto) => (
            <User key={producto.id} product={producto} type={producto.type} />
          ))}
          {filteredStudents.length === 0 ? (
            <div className='emptyProduct'>
              <i className='fas fa-times-circle'></i>
              No hay Alumnos Registrados
            </div>
          ) : null}
        </ListProduct>
      </div>
    </section>
  );
};

export default DashboardCordinator;
