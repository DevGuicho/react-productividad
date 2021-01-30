import React, { useContext, useEffect } from 'react';
import '../../assets/styles/Dashboard.css';
import '../../assets/styles/UserCord.css';
import ListStudent from './ListStudent';
import Student from './Student';
import StudentContext from '../../context/students/studentContext';
import Navbar from './Navbar';

const StudentsPanel = () => {
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

        <Navbar />
        <ListStudent>
          {filteredStudents.map((student) => (
            <Student key={student.id} student={student} type={student.type} />
          ))}
          {filteredStudents.length === 0 ? (
            <div className='emptyProduct'>
              <i className='fas fa-times-circle'></i>
              No hay Alumnos Registrados
            </div>
          ) : null}
        </ListStudent>
      </div>
    </section>
  );
};

export default StudentsPanel;
