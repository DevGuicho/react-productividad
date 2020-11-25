import { usuarios } from '../utils/mocks/usuarios';
const initialStore = {
  productos: [],
  usuarios,
  loading: true,
  place: {
    home: true,
    users: false,
    products: false,
    config: false,
  },
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        productos: [...state.productos, action.value],
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        productos: state.productos.filter((items) => items.id !== action.value),
      };
    case 'UPDATE_PRODUCT':
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
    case 'FETCH_DATA':
      return {
        ...state,
        productos: action.value,
        loading: false,
      };
    default:
      break;
  }
};

export { initialStore };

export default storeReducer;
