/* eslint-disable import/no-anonymous-default-export */

import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FILTER_PRODUCTS,
  GET_PRODUCTS,
  GET_STUDENT_PRODUCTS,
  UPDATE_PRODUCT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        productos: [...state.productos, action.value],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        productos: state.productos.filter((items) => items.id !== action.value),
      };
    case UPDATE_PRODUCT:
      const index = state.productos.findIndex(
        (product) => product.id === action.value.id
      );
      state.productos[index] = action.value;
      /* state.productos[index] = action.value;
      return state; */
      return {
        ...state,
      };
    case 'SET_PLACE':
      return {
        ...state,
        place: action.value,
      };
    case GET_STUDENT_PRODUCTS:
    case GET_PRODUCTS:
      return {
        ...state,
        productos: action.value,
        loading: false,
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.value,
      };
    default:
      break;
  }
};
