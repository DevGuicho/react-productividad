import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ArticuloCongreso from '../components/forms/ArticuloCongreso';
import ArticuloRevista from '../components/forms/ArticuloRevista';
import CapituloLibro from '../components/forms/CapituloLibro';
import Libro from '../components/forms/Libro';
import Desarrollo from '../components/forms/Desarrollo';
import Configuration from '../containers/Configuration';
import Dashboard from '../components/product/Dashboard';
import DashboardCordinator from '../containers/DashboardCordinator';
import DashboardUserCord from '../containers/DashboardUserCord';
import Home from '../containers/Home';
import SelectionPage from '../components/forms/SelectionPage';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Dashboard} />
          <Route exact path='/students' component={DashboardCordinator} />
          <Route exact path='/configuration' component={Configuration} />
          <Route exact path='/select' component={SelectionPage} />
          <Route exact path='/art-congreso' component={ArticuloCongreso} />
          <Route exact path='/art-revista' component={ArticuloRevista} />
          <Route exact path='/capitulo-libro' component={CapituloLibro} />
          <Route exact path='/libro' component={Libro} />
          <Route exact path='/desarrollo' component={Desarrollo} />
          <Route
            exact
            path='/productos-usuario'
            component={DashboardUserCord}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
