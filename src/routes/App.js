import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ArticuloCongreso from '../components/forms/ArticuloCongreso';
import ArticuloRevista from '../components/forms/ArticuloRevista';
import CapituloLibro from '../components/forms/CapituloLibro';
import Libro from '../components/forms/Libro';
import Desarrollo from '../components/forms/Desarrollo';
import Configuration from '../containers/Configuration';
import Home from '../containers/Home';
import SelectionPage from '../components/forms/SelectionPage';
import ProductsPanel from '../components/product/ProductsPanel';
import StudentsPanel from '../components/student/StudentsPanel';
import Login from '../components/auth/Login';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={ProductsPanel} />
          <Route exact path='/students' component={StudentsPanel} />
          <Route exact path='/configuration' component={Configuration} />
          <Route exact path='/select' component={SelectionPage} />
          <Route exact path='/art-congreso' component={ArticuloCongreso} />
          <Route exact path='/art-revista' component={ArticuloRevista} />
          <Route exact path='/capitulo-libro' component={CapituloLibro} />
          <Route exact path='/libro' component={Libro} />
          <Route exact path='/desarrollo' component={Desarrollo} />
          <Route exact path='/productos-usuario' component={ProductsPanel} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
