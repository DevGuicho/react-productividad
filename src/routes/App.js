import React, { useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import ArticuloCongreso from '../containers/ArticuloCongreso';
import ArticuloRevista from '../containers/ArticuloRevista';
import CapituloLibro from '../containers/CapituloLibro';
import Dashboard from '../containers/Dashboard';
import Desarrollo from '../containers/Desarrollo';
import Libro from '../containers/Libro';
import SelectionPage from '../containers/SelectionPage';

export const ProductContext = React.createContext();
const products = [
  {
    id: 1,
    titulo: 'Paralisis del sueño',
    congreso: 'Congreso de Viena',
    fecha: '1998-07-30',
    autor: 'Principal',
    url: 'https://google.com',
    tesis: 'Si',
    type: 'articuloCongreso',
  },
  {
    id: 2,
    titulo: 'Paralisis del sueño',
    autor: 'Principal',
    url: 'https://google.com',
    tesis: 'Si',
    type: 'articuloRevista',
    revista: {
      nombre: 'Science America',
      tipo: 'Arbitrada',
      indice: 'indice',
      isnn: 'isnn',
      doi: 'DOI del articulo',
    },
  },
  {
    id: 3,
    titulo: 'Paralisis del sueño',
    fecha: '2002',
    autor: 'Principal',
    url: 'https://google.com',
    tesis: 'Si',
    type: 'capituloLibro',
    libro: {
      titulo: 'Titulo del libro',
      editorial: 'Limusa',
      edicion: '2da Edición',
      isbn: 'ISBN fda',
    },
  },
  {
    id: 4,
    titulo: 'Paralisis del sueño',
    fecha: '07/07/1998',
    autor: 'Principal',
    url: 'https://google.com',
    tesis: 'Si',
    type: 'Libro',
    libro: {
      editorial: 'Limusa',
      edicion: '2da Edición',
      isbn: 'ISBN fda',
    },
  },
  {
    id: 5,
    titulo: 'Paralisis del sueño',
    fecha: '07/07/1998',
    autor: 'Principal',
    url: 'https://google.com',
    type: 'Desarrollo',
    tesis: 'Si',
    licencia: 'MIT',
    desarrollo: {
      detalles: 'Detalles del producto',
    },
  },
];
const initalState = products;
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, action.value];
    case 'DELETE_PRODUCT':
      return state.filter((items) => items.id !== action.value);
    case 'UPDATE_PRODUCT':
      const index = state.findIndex(
        (product) => product.id === action.value.id
      );
      state[index] = action.value;
      return state;
    /* return [
        ...state.filter((product) => product.id !== action.value.id),
        action.value,
      ]; */
    default:
      break;
  }
};
const App = () => {
  const [product, dispatch] = useReducer(reducer, initalState);
  return (
    <ProductContext.Provider
      value={{ productState: product, productDispatch: dispatch }}
    >
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/select' component={SelectionPage} />
            <Route exact path='/art-congreso' component={ArticuloCongreso} />
            <Route exact path='/art-revista' component={ArticuloRevista} />
            <Route exact path='/capitulo-libro' component={CapituloLibro} />
            <Route exact path='/libro' component={Libro} />
            <Route exact path='/desarrollo' component={Desarrollo} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ProductContext.Provider>
  );
};

export default App;
