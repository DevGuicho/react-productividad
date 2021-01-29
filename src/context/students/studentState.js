import { useReducer } from 'react';

import StudentReducer from './studentReducer';
import { GET_STUDENTS, FILTER_STUDENTS } from '../types';
import StudentContext from './studentContext';

const StudentState = (props) => {
  const initialState = {
    students: [],
    filteredStudents: [],
  };
  const [state, dispatch] = useReducer(StudentReducer, initialState);

  const getStudents = () => {
    dispatch({
      type: GET_STUDENTS,
    });
  };
  const filterStudents = (sel) => {
    if (sel === 'all') {
      dispatch({
        type: FILTER_STUDENTS,
        value: state.students,
      });
    } else if (sel === 'Maestria') {
      dispatch({
        type: FILTER_STUDENTS,
        value: state.students.filter((producto) =>
          producto.estudiante.match(/(Maestria)$/)
        ),
      });
    } else if (sel === 'Doctorado') {
      dispatch({
        type: FILTER_STUDENTS,
        value: state.students.filter((producto) =>
          producto.estudiante.match(/(Doctorado)$/)
        ),
      });
    }
  };
  return (
    <StudentContext.Provider
      value={{
        students: state.students,
        filteredStudents: state.filteredStudents,
        getStudents,
        filterStudents,
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentState;
