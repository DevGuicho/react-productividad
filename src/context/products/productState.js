import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import { students } from '../../utils/mocks/students';
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FILTER_PRODUCTS,
  GET_PRODUCTS,
  GET_STUDENT_PRODUCTS,
  UPDATE_PRODUCT,
} from '../types';
import productContext from './productContext';
import productReducer from './productReducer';

const ProductState = (props) => {
  const initialState = {
    productos: [],
    filteredProducts: [],
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const getProducts = async () => {
    try {
      const resultado = await clienteAxios.get('/products');
      dispatch({
        type: GET_PRODUCTS,
        value: resultado.data.data,
      });
    } catch (error) {
      console.log('error');
    }
  };
  const getStudentProducts = async (id) => {
    const student = students.find((student) => student.id === id);
    dispatch({
      type: GET_STUDENT_PRODUCTS,
      value: student.productos,
    });
  };
  const addProduct = async (product) => {
    try {
      await clienteAxios.post('/products', JSON.stringify(product));
      dispatch({
        type: ADD_PRODUCT,
        value: product,
      });
    } catch (error) {}
  };

  const filterProducts = async (sel) => {
    if (sel === 'all') {
      dispatch({
        type: FILTER_PRODUCTS,
        value: state.productos,
      });
    } else if (sel === 'articulos') {
      dispatch({
        type: FILTER_PRODUCTS,
        value: state.productos.filter((producto) =>
          producto.type.match(/(articuloCongreso)|(articuloRevista)$/)
        ),
      });
    } else if (sel === 'libros') {
      dispatch({
        type: FILTER_PRODUCTS,
        value: state.productos.filter((producto) =>
          producto.type.match(/(capituloLibro)|(Libro)$/)
        ),
      });
    } else if (sel === 'desarrollos') {
      dispatch({
        type: FILTER_PRODUCTS,
        value: state.productos.filter((producto) =>
          producto.type.match(/(Desarrollo)$/)
        ),
      });
    }
  };
  const updateProduct = async (product) => {
    delete product._id;
    try {
      await clienteAxios.put(`/products/${product.id}`, product);
      dispatch({
        type: UPDATE_PRODUCT,
        value: product,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await clienteAxios.delete(`/products/${id}`);
      dispatch({
        type: DELETE_PRODUCT,
        value: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <productContext.Provider
      value={{
        productos: state.productos,
        error: state.error,
        loading: state.loading,
        filteredProducts: state.filteredProducts,
        addProduct,
        updateProduct,
        getProducts,
        getStudentProducts,
        filterProducts,
        deleteProduct,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
