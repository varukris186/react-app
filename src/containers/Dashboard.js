import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/userActions';
import DashboardPage from '../components/DashboardPage';

class Dashboard extends React.Component{
  /*const listData = {
          data: [{
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane.doe@gmail.com'    
      }, {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@gmail.com' 
      }]
  };*/
    
  render(){  
      return (
        <DashboardPage /> /*data={listData.data}*/
      );
  } 
}

export default Dashboard;