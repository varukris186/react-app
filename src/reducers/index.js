import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import commandCenter from './commandCenterReducer';

import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  commandCenter,
  routing: routerReducer
});

export default rootReducer;
