import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Restaurants from './components/Restaurants';
import Create from './components/Create';

const App = () => {
  return (
    <Router>
      <div>
        <AppNavbar />
        <Switch>
          <Route exact path='/' component={Restaurants} />
          <Route exact path='/restaurants' component={Restaurants} />
          <Route exact path='/create' component={Create} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
