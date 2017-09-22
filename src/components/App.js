/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';

import FuelSavingsPage from '../containers/FuelSavingsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import LoginRegisterPage from '../containers/LoginRegisterPage';
import Dashboard from '../containers/Dashboard';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  

  componentDidMount () {
   
  }


  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LoginRegisterPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
    
  }
  
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
