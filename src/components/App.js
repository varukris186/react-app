/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';

import FuelSavingsPage from '../containers/FuelSavingsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import LoginRegisterPage from '../containers/LoginRegisterPage';
import Dashboard from '../containers/Dashboard';
import BuildProjects from '../containers/BuildProjects';
import MobileNotification from '../containers/MobileNotification';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/dist/" component={LoginRegisterPage} />
          <Route exact path="/dist/dashboard" component={Dashboard} />
          <Route exact path="/dist/build-projects" component={BuildProjects} />
          <Route path="/dist/fuel-savings" component={FuelSavingsPage} />
          <Route path="/dist/about" component={AboutPage} />
          <Route path="/dist/notification" component={MobileNotification} />
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
