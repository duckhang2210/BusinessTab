import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Restaurants from './components/Restaurants';

const App = () => {
  return (
    <Router>
      <div>
        <AppNavbar />
        <Switch>
          <Route exact path='/' component={Restaurants} />
          <Route exact path='/books' component={Restaurants} />
          <Route exact path='/books/:id' component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
