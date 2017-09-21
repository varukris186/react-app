
import {push} from 'react-router-redux';

// example of a thunk using the redux-thunk middleware
export function register(userData) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings

    console.log(dispatch);
     dispatch({
      type: 'REGISTER SUCCESSFUL',
      userData
    });
     dispatch(push('/my_url'));
  
  };
}

