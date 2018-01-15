import * as CONSTANTS from '../constants/actionTypes';
import {push} from 'react-router-redux';

// example of a thunk using the redux-thunk middleware
export const register = (type) => (dispatch) => {
     switch(type){
       case CONSTANTS.REGISTER_SUCCESS:
          alert("SuccessFul Registeration");
          break;
       case CONSTANTS.REGISTER_FAILURE:
          alert("UnSuccessFul Registeration");
          break;    
     }
};


// example of a thunk using the redux-thunk middleware
export const handleLogin = (type,data) => (dispatch) => {
  console.log(type);
  switch(type){
    case CONSTANTS.LOGIN_SUCCESS:
       alert("lOGIN SUCESS");
       dispatch(push('/dashboard'));
       break;
    case CONSTANTS.LOGIN_FAILURE:
       alert("LOGIN FAILURE");
       dispatch(push('/about'));
       break;    
  }
};


export const updateBuilds = (type,data) => (dispatch) => {
  return dispatch({
    type: CONSTANTS.BUILD_DATA,
    data: data
  });
};

export const updateCurrentBuild = (type,data) => (dispatch) => {
  return dispatch({
    type: CONSTANTS.CURRENT_BUILD_DATA,
    data: data
  });
};



