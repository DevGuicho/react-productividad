import React, { useReducer } from 'react';
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  FILTER_PRODUCTS,
  GET_PRODUCTS,
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
    fetch('https://productividad-api-devguicho.vercel.app/products')
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_PRODUCTS,
          value: data.data,
        });
        return data.data;
      });
  };

  const addProduct = async (product) => {
    try {
      await fetch('https://productividad-api-devguicho.vercel.app/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
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
    fetch(
      `https://productividad-api-devguicho.vercel.app/products/${product.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => {
        dispatch({
          type: UPDATE_PRODUCT,
          value: product,
        });
      })
      .catch((err) => false);
  };

  const deleteProduct = async (id) => {
    fetch(`https://productividad-api-devguicho.vercel.app/products/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        dispatch({
          type: DELETE_PRODUCT,
          value: id,
        });
      })
      .catch((err) => false);
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
        filterProducts,
        deleteProduct,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};

export default ProductState;
