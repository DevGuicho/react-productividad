import { FILTER_STUDENTS, GET_STUDENTS } from '../types';
import { students } from '../../utils/mocks/students';
/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        students,
      };
    case FILTER_STUDENTS:
      return {
        ...state,
        filteredStudents: action.value,
      };
    default:
      return {
        ...state,
      };
  }
};
