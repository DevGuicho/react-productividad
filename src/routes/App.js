import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import ArticuloCongreso from '../containers/ArticuloCongreso';
import Dashboard from '../containers/Dashboard';
import SelectionPage from '../containers/SelectionPage';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/select' component={SelectionPage} />
        <Route exact path='/art-congreso' component={ArticuloCongreso} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
