import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import ArticuloCongreso from '../containers/ArticuloCongreso';
import ArticuloRevista from '../containers/ArticuloRevista';
import CapituloLibro from '../containers/CapituloLibro';
import Configuration from '../containers/Configuration';
import Dashboard from '../containers/Dashboard';
import DashboardCordinator from '../containers/DashboardCordinator';
import DashboardUserCord from '../containers/DashboardUserCord';
import Desarrollo from '../containers/Desarrollo';
import Home from '../containers/Home';
import Libro from '../containers/Libro';
import SelectionPage from '../containers/SelectionPage';

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
            path='/productos-usaurio'
            component={DashboardUserCord}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
